import React from "react";
import CartHeader from "./cart-header/CartHeader";
import CartItems from "./cart-items/CartItems";

const Cart = (props) => {
    return (
        <div>
            <CartHeader groceries={props.groceries}/>
            <CartItems groceries={props.groceries}/>
        </div>
    );
};

export default Cart;
