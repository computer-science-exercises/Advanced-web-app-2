import React from "react";
import Card from "../../shopping-item/Card";

const CartItems = (props) => {
    return (
        <div class="w-100">
            {props.groceries.map(grocery => (
                <div class="d-flex flex-column justify-content-center">
                    <Card grocery={grocery} isCart={true}/>
                </div>
            ))}
        </div>
    );
};

export default CartItems;
