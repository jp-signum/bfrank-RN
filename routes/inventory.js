const express = require('express');
const inventoryRouter = express.Router();
const Item = require('../models/item');
const User = require('../models/user');
const Cart = require('../models/cart');

// add item to cart 
inventoryRouter.post('/a2c', (req, res, next) => {
    console.log(req.body)
})


module.exports = inventoryRouter;