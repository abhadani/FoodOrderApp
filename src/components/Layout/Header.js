import React, {useContext, useEffect, useState} from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./Header.module.css";
import mealsImg from '../../assets/meals.jpg';
import CartContext from "../../store/cart-context";

const Header = (props) => { 

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const {items} = cartCtx;
  const noOfCartItem = items.reduce((curNumber, item) => {
    return curNumber  + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if(items.length === 0){
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeal</h1>
        <button className={btnClasses} onClick = {props.onShowCart}>
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
