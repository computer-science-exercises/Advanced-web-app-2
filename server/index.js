const express = require("express");
const cors = require('cors');
const {default: mongoose} = require("mongoose");
const app = express();
const bodyParser = require('body-parser')
const dbCon = 'mongodb+srv://app2:app2@exercisetwo.a0pby9h.mongodb.net/?retryWrites=true&w=majority'
const methodOverride = require('method-override');
const {getAllStoreProducts} = require("./controllers/controller");
const {createOrder} = require("./controllers/controller");

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

app.post('/createOrder', async (req, res) => {
    console.log(req.body)
    console.log('createOrder')
    createOrder(req, res)
})

app.listen(3001, () => {
    console.log("listening on port 3001!");
})