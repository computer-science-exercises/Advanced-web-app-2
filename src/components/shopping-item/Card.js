import React, {useState} from 'react';

import './Card.css';
import {Link} from "react-router-dom";

const Card = (props) => {
    const [amount, setAmount] = useState(props.grocery.amount);

    return (
        <div class="align-self-center">
            <Link class="no-under-line" to={"/details/" + props.grocery.id}>
                <div class="item" key={props.grocery.id}>
                    <div class="align-self-center">
                        <div class="name">{props.grocery.name}</div>
                        <div>{props.grocery.price}₪</div>
                    </div>
                    <div class="image-border">
                        <img class="image" src={props.grocery.img} width="150" height="200"/>
                    </div>
                </div>
            </Link>
            {props.isCart ?
                <div class="d-flex justify-content-center">
                    <button
                        class="btn btn-primary"
                        onClick={increaseAmount}
                    >+ 66
                    </button>
                    <h6 class="p-1 pt-2">
                        {amount}
                    </h6>
                    <button
                        class="btn btn-primary"
                        onClick={decreaseAmount}
                    >-
                    </button>
                </div> :
                <div>
                    <button class="btn btn-primary">Add to cart</button>
                </div>}
        </div>
    );

    function decreaseAmount() {
        setAmount(amount - 1)
    }

    function increaseAmount() {
        setAmount(amount + 1)
    }
};

export default Card;
