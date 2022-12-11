const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
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
    }
})

const Product = mongoose.model('products', productSchema);
module.exports = Product;
