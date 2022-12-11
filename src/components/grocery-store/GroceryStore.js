import React from "react";
import Card from "../shopping-item/Card";
import cartIcon from "../../assets/cart-icon.svg";
import {Link} from "react-router-dom";
import swal from 'sweetalert';

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
                    <div>
                        <button className="btn btn-primary"
                                onClick={event => {
                                    addItemToCart(props.setCartGroceries, grocery, props.cartGroceries)
                                }}
                        >Add to cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

const addItemToCart = (setCartGroceries, groceryToAdd, cartGroceries) => {
    if (!cartGroceries.find(g => g.id === groceryToAdd.id)){
        setCartGroceries([...cartGroceries,  {
            id: groceryToAdd.id,
            name: groceryToAdd.name,
            img: groceryToAdd.img,
            price: groceryToAdd.price,
            store: groceryToAdd.store,
            secondImg: groceryToAdd.secondImg,
            description: groceryToAdd.description,
            amount: 1
        }])
        swal({
            title: "Done!",
            text: "Added " + groceryToAdd.name + " to cart ",
            icon: "success",
            timer: 2000,
            button: false
        })
    }else {

        swal({
            title: "Sorry!",
            text: groceryToAdd.name + " is already in cart",
            icon: "error",
            timer: 2000,
            button: false
        })
    }
};

export default GroceryStore;
