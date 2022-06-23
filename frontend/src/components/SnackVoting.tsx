import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MessageType, SelectionType } from "../utiles/typeUtility";
import Cart from "./layout/Cart";
import "./SnackVoting.css";



const itemsList: SelectionType[] = [
  { id: 1, name: "Nabisco Oreo Cookies", amount: 3 },
  { id: 2, name: "General Mills Chex Mix", amount: 11 },
  { id: 3, name: "Clif Chocolate Chip Energy Bar", amount: 8 },
  { id: 4, name: "Cheetos Chips", amount: 12 },
  { id: 5, name: "Baked Lays Potato Chips", amount: 4 },
  { id: 6, name: "Hersheys Milk Chocolate", amount: 5 },
  { id: 7, name: "Jack Links Beef Jerky", amount: 8 },
  { id: 8, name: "Planters Salted Peanuts", amount: 2 },
];
const SnackVoting = () => {
  const [selection, setSelection] = useState<SelectionType[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [stockMessage, setStockMessage] = useState({} as MessageType);
  

  const handleSelection = (e: React.MouseEvent<HTMLElement>) => {
    const newSlelected = itemsList.find(
      (item) => item.id.toString() === e.currentTarget.id
    );
    const isFound = selection.find((item) => item === newSlelected);
    if (selection.length >= 3) {
      setShowModal(true);
      setStockMessage({
        info: "Ups",
        error: "You can only select a maximum of three snacks per month.",
        suggest: "Instead, you can now make your vote.",
      });
      return;
    }

    if (isFound) {
      setStockMessage({
        info: "Ups",
        error: "That snack is already selected.",
        suggest: "",
      });
      setShowModal(true);
      return;
    }

    setSelection((prevState) => {
      return [...prevState, newSlelected!];
    });
    setShowModal(false);
    setStockMessage({
      info: "",
      error: "",
      suggest: "",
    });
  };

  const handleClose = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <>
      {showModal && <Cart onClose={handleClose} message={stockMessage} />}
      <div className="snak-voting">
        <h2 className="hdg hdg_2 mix-hdg_dark snack">Snack Voting</h2>
        <h4 className="hdg hdg_4 mix-hdg_dark snack">
          Vote on the snacks you want to see in this month's rotation
        </h4>
        <div className="snack-info">
          <span className="assideText snack">
            {3 - selection.length} Votes Remaining
          </span>
        </div>
        <div className="snack-content-items">
          <div className="snack-avilable-items">
            <div className="snack-tb-info">
              <h4 className="hdg hdg_4 snack-avilable-item">Available Items</h4>
              <div className="snack-baged">
                <span className="snack-baged-num">{itemsList.length}</span>
              </div>
            </div>
            {itemsList.map((item) => (
              <div className="snack-tb-item" key={item.id}>
                <div className="snack-tb-item snack_plus_icon">
                  <FaPlus
                    className="sanck_svg fa-plus"
                    height={"100%"}
                    fill={"#ffffff"}
                  />
                </div>
                <div
                  className="snack-tb-item snack_name"
                  onClick={handleSelection}
                  id={`${item.id}`}
                >
                  <h6 className="hdg hdg_6 mix-hdg_dark snack-avilable-item">
                    {item.name}
                  </h6>
                  <div className="snack-baged snack_amount">
                    <span className="snack-baged-num">{item.amount}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="snack-avilable-items selection">
            <div className="snack-tb-info selection">
              <h4 className="hdg hdg_4 mix-hdg_dark snack-avilable-item selection">
                Selection
              </h4>
              <div className="snack-baged selection">
                <span className="snack-baged-num selection">
                  {selection.length}
                </span>
              </div>
            </div>
            {selection.map((item) => (
              <div className="snack-tb-item selection" key={item.id}>
                <div className="snack-tb-item snack_name selection">
                  <h6 className="hdg hdg_6 mix-hdg_dark snack-avilable-item selection">
                    {item.name}
                  </h6>
                  <div className="snack-baged snack_amount">
                    <span className="snack-baged-num">{item.amount}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SnackVoting;
