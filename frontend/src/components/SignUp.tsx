import { type } from "os";
import React, { useContext, useState } from "react";
import VoteContext from "../context/VoteContext";
import {
  checkListType,
  MessageType,
} from "../utiles/typeUtility";
import { User } from "../utiles/User";
import Cart from "./layout/Cart";
import EmailSVG from "./svg/EmailSVG";
import FaxSVG from "./svg/FaxSVG";
import LocateSVG from "./svg/LocateSVG";

type checkEventType = React.ChangeEvent<HTMLInputElement>;

let checkList: checkListType[] = [
  {
    name: "form-employee",
    value: "I am a Nerdery employee",
    checked: false,
  },
  {
    name: "form-notify",
    value: "Notify Me for Special Offers!",
    checked: false,
  },
];

const initialState: User = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
  createdAt: new Date(),
  votedAt: null,
};

const SignUp = () => {
  const [stockMessage, setStockMessage] = useState<MessageType>({
    info: "",
    error: "",
    suggest: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [isChecked, setIsChecked] = useState<checkListType[]>(checkList);
  const [formData, setFormData] = useState<User>(initialState);
  const { firstName, lastName, email, phone, message } = formData;

  const { signUp } = useContext(VoteContext);

  const hanndleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e && e.target) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleCheck = (e: checkEventType) => {
    const findEl = checkList.findIndex((item) => item.name === e.target.value);
    const saveValue = e.target.checked;
    checkList[findEl].checked =
      checkList[findEl].checked === saveValue ? !saveValue : saveValue;

    setIsChecked([...checkList]);
  };

  const handleClose = () => {
    setShowModal((prevState) => !prevState);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (
      firstName.trim().length < 3 ||
      lastName.trim().length < 3 ||
      email.trim().length < 3 ||
      phone.trim().length < 3
    ) {
      setShowModal(true);
      setStockMessage({
        info: "Warning",
        error: `Type the form's fields correctly`,
      });
      return;
    }

    setShowModal(true);
    setFormData((prevState) => ({
      ...prevState,
      createdAt: new Date(),
    }));
    signUp(formData);

    localStorage.setItem("user", JSON.stringify(formData));

    setFormData(initialState);
    setStockMessage({
      info: "Great",
      success: `User ${firstName} ${lastName} has been logged`,
    });
  };

  return (
    <>
      {showModal && <Cart onClose={handleClose} message={stockMessage} />}
      <div className="site-bd-section site-bd-section_gray">
        <div className="u-constrainer">
          <div className="layoutPanel">
            <div className="layoutPanel-hd">
              <div className="layoutPanel-hd-title">
                <h2 className="hdg hdg_2 mix-hdg_dark">
                  Sign up for Snafoo updates!
                </h2>
              </div>
            </div>
            <div className="layoutPanel-bd">
              <div className="grid">
                <div className="grid-col grid-col_2of3">
                  <form onSubmit={handleSubmit} className="inputForm">
                    <div className="inputForm-item inputForm-item_half">
                      <label className="u-isVisuallyHidden">Fist Name</label>
                      <input
                        className="inputForm-text"
                        type="text"
                        name="firstName"
                        placeholder="Fist Name"
                        value={firstName}
                        onChange={hanndleChange}
                      />
                    </div>
                    <div className="inputForm-item inputForm-item_half">
                      <label className="u-isVisuallyHidden">Last Name</label>
                      <input
                        className="inputForm-text"
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={hanndleChange}
                      />
                    </div>
                    <div className="inputForm-item inputForm-item_half">
                      <label className="u-isVisuallyHidden">Email</label>
                      <input
                        className="inputForm-text"
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={hanndleChange}
                      />
                    </div>
                    <div className="inputForm-item inputForm-item_half">
                      <label className="u-isVisuallyHidden">Phone Number</label>
                      <input
                        className="inputForm-text"
                        type="number"
                        name="phone"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={hanndleChange}
                      />
                    </div>
                    <div className="inputForm-item">
                      <label className="u-isVisuallyHidden">Message</label>{" "}
                      <textarea
                        className="inputForm-area"
                        placeholder="Message"
                        name="message"
                        value={message!}
                        onChange={hanndleChange}
                      ></textarea>
                    </div>
                    <div className="inputForm-item">
                      {isChecked.map((item, index: number) => {
                        return (
                          <div
                            className="inputForm-item-checkGroup"
                            key={index}
                          >
                            <input
                              id={`${item.name}`}
                              className="u-isVisuallyHidden"
                              type="checkbox"
                              name={item.name}
                              value={item.name}
                              onChange={handleCheck}
                              checked={item.checked}
                            />
                            <label htmlFor={item.name}>{item.value}</label>
                            {item.checked}
                          </div>
                        );
                      })}
                    </div>
                    <div className="inputForm-item">
                      <input
                        className="btn btn_dark"
                        type="submit"
                        value="Sign Up"
                      />
                    </div>
                  </form>
                </div>
                <div className="grid-col grid-col_1of3">
                  <div className="media u-vr_x4">
                    <div className="media-figure">
                      <svg className="icon">
                        <EmailSVG />
                      </svg>
                    </div>
                    <div className="media-bd">
                      <span className="assideText">info@nerdery.com</span>
                    </div>
                  </div>
                  <div className="media u-vr_x4">
                    <div className="media-figure">
                      <svg className="icon">
                        <FaxSVG />
                      </svg>
                    </div>
                    <div className="media-bd">
                      <span className="assideText">(877) 664.6373</span>
                    </div>
                  </div>
                  <div className="media u-vr_x4">
                    <div className="media-figure">
                      <svg className="icon">
                        <LocateSVG />
                      </svg>
                    </div>
                    <div className="media-bd">
                      <span className="assideText">
                        The Nerdery Snafoo Team
                        <br />
                        9555 James Ave. S.
                        <br />
                        Bloomington MN, 55431
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
