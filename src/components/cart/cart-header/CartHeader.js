import React from "react";
import './CartHeader.css';

const CartHeader = (props) => {
    let totalPrice = 0;
    props.groceries.forEach(grocery => {
      totalPrice = totalPrice + (grocery.price * grocery.amount)
    })

    return (
        <div class="w-100 px-5 header d-flex justify-content-between align-items-center">
            <h1>total price: {(Math.round(totalPrice * 100) / 100).toFixed(2)}₪</h1>
            <button
                class="btn btn-primary p-3"
                onClick={updateCart}
            >Send</button>
        </div>
    );

    function updateCart(){
        console.log('update cart')
    }
};

export default CartHeader;
