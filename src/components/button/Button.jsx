import classes from './Button.module.scss';
import { ReactComponent as CartIcon } from '../../assets/icon-cart.svg';

import React from 'react';

const Button = () => {
  return (
    <div className={classes.btn}>
      <CartIcon className={classes['btn__icon']}></CartIcon>
      <span className={classes['btn__content']}>Add to Cart</span>
    </div>
  );
};

export default Button;
