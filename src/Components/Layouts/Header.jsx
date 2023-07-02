// import mealsImage from '../assets/donuts.jpg'
// import classes from './header.module.css'
// import HeaderCardButton from './HeaderCardButton'

// export default function Header() {
//   return (
//     <>
//     <header className={classes.header}>
//         <h1>Yum Yum Donuts</h1>
//     <HeaderCardButton />
//     </header>
//     <div className={classes['main-image']} >
//     <img src={mealsImage} alt="a picture of colorful donuts" />
//     </div>
//     </>
//   )
//   }

import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../assets/donuts.jpg'
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Yum Yum Donuts</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;