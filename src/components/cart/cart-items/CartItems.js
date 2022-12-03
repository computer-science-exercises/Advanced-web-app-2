import React, {useState} from "react";
import Card from "../../shopping-item/Card";
import Eggs from "../../../assets/eggs.jpeg";
import SecondEggs from "../../../assets/secondEggs.jpeg";

const CartItems = (props) => {

    // const [amount, setAmount] = useState(props.grocery.amount);

    return (
        <div class="w-100">
            {props.groceries.map(grocery => (
                <div class="d-flex flex-column justify-content-center">
                    <Card grocery={grocery} isCart={true}/>
                    <div className="d-flex justify-content-center">
                        <button
                            className="btn btn-primary"
                            onClick={event => {
                                increaseAmount(props.setCartGroceries, grocery.id, props.groceries)
                            }}
                        >+
                        </button>
                        <h6 className="p-1 pt-2">
                            {grocery.amount}
                        </h6>
                        <button
                            className="btn btn-primary"
                            onClick={event => {
                                decreaseAmount(props.setCartGroceries, grocery.id, props.groceries)
                            }}
                        >-
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

const decreaseAmount = (setGroceries, id, groceries) => {
    updatedGroceryAmount(setGroceries, id, groceries, -1)
};

const increaseAmount = (setGroceries, id, groceries) => {
    updatedGroceryAmount(setGroceries, id, groceries, 1)
};

function updatedGroceryAmount(setGroceries, id, groceries, difference){
    setGroceries(
        groceries.map(g => {
            if (g.id === id && !(difference === -1 && g.amount < 1)){
                return {
                    id: g.id,
                    name: g.name,
                    img: g.img,
                    price: g.price,
                    store: g.store,
                    secondImg: g.secondImg,
                    description: g.description,
                    amount: g.amount + difference
                }
            } else {
                return g;
            }
        }))
}

export default CartItems;
