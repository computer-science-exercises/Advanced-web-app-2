const express = require("express");
const cors = require('cors');
const {default: mongoose} = require("mongoose");
const app = express();
const bodyParser = require('body-parser')
const dbCon = 'mongodb+srv://app2:app2@exercisetwo.a0pby9h.mongodb.net/?retryWrites=true&w=majority'
const methodOverride = require('method-override');
const {updateUser} = require("./controllers/controller");
const {getUserById} = require("./controllers/controller");
const {updateCartProducts} = require("./controllers/controller");
const {getAllCartProducts} = require("./controllers/controller");
const {getAllStoreProducts} = require("./controllers/controller");

app.use(cors());
app.use(bodyParser.json())
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));

mongoose.connect(dbCon, {useNewUrlParser: true})
    .then(() => {
        console.log("mongo connection open!!");
    }).catch(err => {
    console.log("no connection start");
})

app.get('/getAllStoreProducts', async (req, res) => {
    console.log('getAllStoreProducts')
    getAllStoreProducts(req, res)
})

app.post('/getAllCartProducts', async (req, res) => {
    console.log('getAllCartProducts')
    getAllCartProducts(req, res)
})

app.post('/updateCartProducts', async (req, res) => {
    console.log('updateCartProducts')
    updateCartProducts(req, res)
})

app.post('/getUserById', async (req, res) => {
    console.log('getUserById')
    getUserById(req, res)
})

app.post('/updateUser', async (req, res) => {
    console.log('updateUser')
    updateUser(req, res)
})

app.listen(3001, () => {
    console.log("listening on port 3001!");
})





