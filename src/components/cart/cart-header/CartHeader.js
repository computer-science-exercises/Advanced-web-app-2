import React from 'react';
import './CartHeader.css';
import { Link } from 'react-router-dom';
import checkoutIcon from '../../../assets/checkout.svg';
import arrowIcon from '../../../assets/left-arrow.svg';

const CartHeader = (props) => { 
  let totalPrice = 0;
  props.groceries.forEach((grocery) => {
    totalPrice = totalPrice + grocery.price * grocery.amount;
  });

  return (
    <div class="w-100 pe-3 header d-flex justify-content-between align-items-center">
      <div>
        <Link to={'/'}>
          <img class="pt-3" src={arrowIcon} />
        </Link>
      </div>
      <h1>total price: {(Math.round(totalPrice * 100) / 100).toFixed(2)}₪</h1>
        <Link to={'/order'}>
          <img src={checkoutIcon} />
        </Link>
    </div>
  );
};

export default CartHeader;
