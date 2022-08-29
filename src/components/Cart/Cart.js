import React from "react";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useState } from "react";

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))} 
    </ul>
  );

  return (
    <Modal onHideCart = {props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.67</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick = {props.onHideCart}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
