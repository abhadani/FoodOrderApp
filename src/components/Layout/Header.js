import React, {useContext} from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./Header.module.css";
import mealsImg from '../../assets/meals.jpg';
import CartContext from "../../store/cart-context";

const Header = (props) => { 
  const cartCtx = useContext(CartContext);

  const noOfCartItem = cartCtx.items.reduce((curNumber, item) => {
    return curNumber  + item.amount;
  }, 0)

  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeal</h1>
        <button className={classes.button} onClick = {props.onShowCart}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{noOfCartItem}</span>
        </button>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt='A table full of delicious food!' />
      </div>
    </React.Fragment>
  );
};

export default Header;
