import React from "react";
import Card from "../shopping-item/Card";
import cartIcon from "../../assets/cart-icon.svg";
import {Link} from "react-router-dom"

const GroceryStore = (props) => {
    return (
        <div className="w-100">
            <div class="position-fixed mt-5 mx-5">
                <div class="position-absolute mx-5 top-0 start-0 translate-middle">
                    <Link to={"/cart"}>
                        <img src={cartIcon}/>
                    </Link>
                </div>
            </div>
            {props.groceries.map(grocery => (
                <div className="d-flex flex-column justify-content-center">
                    <Card grocery={grocery} isCart={false}/>
                </div>
            ))}
        </div>
    );
};

export default GroceryStore;
