import './App.css';
import React, {useEffect, useState} from "react";
import {Route, BrowserRouter} from "react-router-dom";
import Details from "./components/details/details";
import Order from "./components/order/order";
import {Routes} from "react-router";
import Cart from "./components/cart/Cart";
import GroceryStore from "./components/grocery-store/GroceryStore";
import HttpService from "./services/httpService";

function App() {
    const [cartGroceries, setCartGroceries] = useState([]);
    const [storeGroceries, setStoreGroceries] = useState([]);

    useEffect(() => {
            HttpService.getAllStoreProducts().then(res => {
                    setStoreGroceries(res.data)
                }
            )
        }, [false]
    );

    return (

        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/cart"
                           element={<Cart groceries={cartGroceries} setCartGroceries={setCartGroceries}/>}/>
                    <Route path="/" element={<GroceryStore groceries={storeGroceries} cartGroceries={cartGroceries}
                                                           setCartGroceries={setCartGroceries}/>}/>
                    <Route path="details/:id" element={<Details groceries={storeGroceries}/>}/>
                    <Route path="/order" element={<Order groceries={cartGroceries}/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
