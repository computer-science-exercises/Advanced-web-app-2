import React from "react";
import axios from "axios";

const serverUrl = 'http://localhost:3001/';

class HttpService {

    static async getAllStoreProducts() {
        return await axios.get(serverUrl + "getAllStoreProducts");
    }

    static async createOrder(user, cartGroceries) {
        return await axios.post(serverUrl + "createOrder",
            {user: user, products: cartGroceries});
    }
}

export default HttpService;
