const Product = require("../models/product");
const Order = require("../models/order");

const getAllStoreProducts = (req, res) => {
    addHeaders(res)

    Product.find().then((response) => {
            res.send(response)
        }
    ).catch((e) => {
        console.log(`there was a problem...${e.message}`)
    })
}

const createOrder = (req, res) => {
    Order.create(
        {
            user: req.body.user,
            products: req.body.products
        }
    ).then(()=>
    {
        res.send()
    }).catch((e) => {
                console.log(`there was a problem...${e}`)
    });
}

function addHeaders(res) {
    res.set(
        {
            'Access-Control-Allow-Origin': ['http://localhost:3000'],
            'Access-Control-Allow-Headers': ['Access-Control-Allow-Headers', 'Origin,Accept', 'Content-Type']
        }
    )
}

module.exports = {
    getAllStoreProducts,
    createOrder
}
