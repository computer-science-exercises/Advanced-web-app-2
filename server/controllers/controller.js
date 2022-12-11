const Product = require("../models/product");
const CartProduct = require("../models/cartProduct");
const User = require("../models/user");

const getAllStoreProducts = (req, res) => {
    addHeaders(res)

    Product.find().then((response) => {
            res.send(response)
        }
    ).catch((e) => {
        console.log(`there was a problem...${e.message}`)
    })
}

const getAllCartProducts = (req, res) => {
    addHeaders(res)

    CartProduct.findOne({userId: req.body.userId}).then((response) => {
            res.send(response)
        }
    ).catch((e) => {
        console.log(`there was a problem...${e.message}`)
    })
}

const updateCartProducts = (req, res) => {
    CartProduct.findOneAndUpdate(
        {userId: req.body.userId},
        {
            userId: req.body.userId,
            products: req.body.products
        },
        {new: true, upsert: true}
    ).then(()=>
    {
        res.send()
    }).catch((e) => {
                console.log(`there was a problem...${e}`)
    });
}

const getUserById = (req, res) => {
    addHeaders(res)

    User.findOne({id: req.body.id}).then((response) => {
            res.send(response)
        }
    ).catch((e) => {
        console.log(`there was a problem...${e.message}`)
    })
}

const updateUser = (req, res) => {
    let user = req.body;

    User.findOneAndUpdate({id: req.body.id},
        {
            id: user.id,
            name: user.name,
            mail: user.mail,
            phoneNumber: user.phoneNumber
        },
        {new: true, upsert: true}
    ).then((response) => {
            res.send()
        }
    ).catch((e) => {
        console.log(`there was a problem...${e.message}`)
    })
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
    getAllCartProducts,
    updateCartProducts,
    getUserById,
    updateUser
}
