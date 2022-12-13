const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    user: {
        id: {
            type: Number,
            require: true
        },
        name: {
            type: String
        },
        mail: {
            type: String    
        },
        phoneNumber: {
            type: String,
            require: true,
        }
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

const order = mongoose.model('orders', orderSchema);
module.exports = order;
