import React from 'react';

import '../shopping-item/Card.css';
import {useParams} from "react-router";

const Details = (props)=> {
    const { id } = useParams();
    const grocery = props.groceries.find((g) => g.id == id);

    return (
        <div>
            <h2>{grocery.name}</h2>
            <p>Details : {grocery.description}</p>
            <p>Store : {grocery.store}</p>
            <img className="image" src={grocery.img} width="150" height="200"/>
            <img className="image" src={grocery.secondImg} width="150" height="200"/>
        </div>
    );
};

export default Details;
