import React from 'react';
import './CartHeader.css';
import HttpService from '../../../services/httpService';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import personIcon from '../../../assets/person-icon.svg';
import arrowIcon from '../../../assets/left-arrow.svg';

const CartHeader = (props) => {
  let totalPrice = 0;
  props.groceries.forEach((grocery) => {
    totalPrice = totalPrice + grocery.price * grocery.amount;
  });

  return (
    <div class="w-100 px-5 header d-flex justify-content-between align-items-center">
      <div>
        <Link to={'/profile'}>
          <img src={personIcon} />
        </Link>
        <Link to={'/'}>
          <img class="pt-3" src={arrowIcon} />
        </Link>
      </div>
      <h1>total price: {(Math.round(totalPrice * 100) / 100).toFixed(2)}₪</h1>
      <button class="btn btn-primary p-2" onClick={updateCart}>
        Update Cart
      </button>
    </div>
  );

  function updateCart() {
    HttpService.updateCartProducts(props.groceries)
      .then(() => {
        swal({
          title: 'Done!',
          text: 'Cart is updated',
          icon: 'success',
          timer: 2000,
          button: false,
        });
      })
      .catch(() => {
        swal({
          title: 'Sorry!',
          text: 'there was a problem',
          icon: 'error',
          timer: 2000,
          button: false,
        });
      });
  }
};

export default CartHeader;
