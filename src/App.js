import './App.css';
import Milk from "./assets/milk.jpeg";
import SecondMilk from "./assets/secondMilk.jpeg";
import Flour from "./assets/flour.jpeg";
import SecondFlour from "./assets/secondFlour.jpeg";
import Oil from "./assets/oil.jpeg";
import SecondOil from "./assets/secondOil.jpeg";
import Eggs from "./assets/eggs.jpeg";
import SecondEggs from "./assets/secondEggs.jpeg";
import React, {useState} from "react";
import {Route, BrowserRouter} from "react-router-dom";
import Details from "./components/details/details";
import {Routes} from "react-router";
import CartItems from "./components/cart/cart-items/CartItems";
import Cart from "./components/cart/Cart";
import GroceryStore from "./components/grocery-store/GroceryStore";

function App() {

    const  [cartGroceries, setCartGroceries] = useState( [
        {
            id: 1,
            name: 'Milk',
            img: Milk,
            price: 6.23,
            store: 'Shufersal',
            secondImg: SecondMilk,
            description: 'milk milk milk',
            amount: 8
        },
        {
            id: 2,
            name: 'Flour',
            img: Flour,
            price: 4.50,
            store: 'Rami Levi',
            secondImg: SecondFlour,
            description: 'flour flour flour',
            amount: 4
        },
        {
            id: 3,
            name: 'Oil',
            img: Oil,
            price: 15.90,
            store: 'Shufersal',
            secondImg: SecondOil,
            description: 'oil oil oil',
            amount: 8
        },
        {
            id: 4,
            name: 'Eggs',
            img: Eggs,
            price: 22.40,
            store: 'Mega',
            secondImg: SecondEggs,
            description: 'eggs eggs eggs',
            amount: 2
        },
    ]);

    const storeGroceries = [
        {
            id: 1,
            name: 'Milk',
            img: Milk,
            price: 6.23,
            store: 'Shufersal',
            secondImg: SecondMilk,
            description: 'milk milk milk',
        },
        {
            id: 2,
            name: 'Flour',
            img: Flour,
            price: 4.50,
            store: 'Rami Levi',
            secondImg: SecondFlour,
            description: 'flour flour flour',
        },
        {
            id: 3,
            name: 'Oil',
            img: Oil,
            price: 15.90,
            store: 'Shufersal',
            secondImg: SecondOil,
            description: 'oil oil oil',
        },
        {
            id: 4,
            name: 'Eggs',
            img: Eggs,
            price: 22.40,
            store: 'Mega',
            secondImg: SecondEggs,
            description: 'eggs eggs eggs',
        },
    ];

    return (

        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/cart" element={<Cart groceries={cartGroceries} setCartGroceries={setCartGroceries}/>}/>
                    <Route path="/grocery-store" element={<GroceryStore groceries={storeGroceries} cartGroceries={cartGroceries}/>}/>
                    <Route path="/" element={<GroceryStore groceries={storeGroceries} cartGroceries={cartGroceries}/>}/>
                    <Route path="details/:id" element={<Details groceries={storeGroceries}/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
