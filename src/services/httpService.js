import React from "react";
import axios from "axios";

const serverUrl = 'http://localhost:3001/';

class HttpService {

    static async getAllStoreProducts() {
        return await axios.get(serverUrl + "getAllStoreProducts");
    }

    static async getAllCartProducts() {
        return await axios.post(serverUrl + "getAllCartProducts", {userId: 1});
    }

    static async updateCartProducts(cartGroceries) {
        return await axios.post(serverUrl + "updateCartProducts",
            {userId: 1, products: cartGroceries});
    }

    static async getUserById(id) {
        return await axios.post(serverUrl + "getUserById", id);
    }

    static async updateUser(user) {
        return await axios.post(serverUrl + "updateUser", user);
    }
}

export default HttpService;
