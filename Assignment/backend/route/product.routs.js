const express =require('express');
const { getProducts } = require('../controller/product.controler');

const productRouter = express.Router();

productRouter.get("/product", getProducts )

module.exports = {
    productRouter
}