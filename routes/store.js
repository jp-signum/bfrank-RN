const express = require("express");
const storeRouter = express.Router();
const Item = require("../models/item");


storeRouter.get('/', (req, res, next) => {
    Item.find(req.query, (err, items) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(200).send(items);
    });
});

storeRouter.get('/:itemId', (req, res, next) => {
    Item.findOne({ _id: req.params.itemId }, (err, item) => {
        if (err) {
            res.status(500);
            return next(err);
        } else if (!item) {
            res.status(404)
            return next(new Error('No item found.'));
        }
        return res.send(item);
    });
});


storeRouter.delete('/nails/:itemId', (req, res, next) => {
    Item.findOneAndRemove({ _id: req.params.itemId }, (err, item) => {
        if (err) {
            res.status(500);
            return next(err);
        } 
        return res.send(item)
    });
});

module.exports = storeRouter;