const mongoose = require('mongoose');
const cartProductSchema = new mongoose.Schema({
    userId: {
        type: Number
    },
    products: [
        {
            id: {
                type: Number,
                require: true
            },
            name: {
                type: String
            },
            img: {
                type: String
            },
            price: {
                type: Number,
                require: true,
                min: 0
            },
            store: {
                type: String
            },
            secondImg: {
                type: String
            },
            description: {
                type: String
            },
            amount: {
                type: Number
            }
        }
    ],

})

const cartProduct = mongoose.model('cartProducts', cartProductSchema);
module.exports = cartProduct;
