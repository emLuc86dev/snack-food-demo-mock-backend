import { useContext } from "react";

import Modal from "./Modal";
import classes from "./Cart.module.css";
import { MessageType } from "../../utiles/typeUtility";



const Cart: React.FC<{message: MessageType, onClose: () => void}> = ({message, onClose}) => {
  return (
    <Modal onClose={onClose}>
      <div className={`${classes.total + " " + classes.warning}`}>
        <h1>{message.info}!</h1>
      </div>
      <div className={classes.total}>
        <span>{message.error || message.success}</span>
      </div>
      <div className={classes.total}>
        <span>{message.suggest}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
