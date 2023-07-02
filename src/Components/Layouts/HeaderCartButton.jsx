// import React from 'react'
// import CartIcon from '../ExtraFiles/cartIcon'
// import classes from './HeaderCartButton.module.css'

// export default function HeaderCartButton() {
//   return (
//     <span>
//     <CartIcon/>
//     <span>
// <span>Your Cart</span>
// <span className={classes.badge}>3</span>
//     </span>
//     </span>
//   )
// }
import CartIcon from '../ExtraFiles/cartIcon'
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;