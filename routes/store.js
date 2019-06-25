const express = require("express");
const storeRouter = express.Router();
const Item = require("../models/item");


storeRouter.get("/", (req, res, next) => {
    Item.find(req.query, (err, items) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(200).send(items);
    });
});

storeRouter.get("/:itemId", (req, res, next) => {
    Item.findOne({ _id: req.params.itemId }, (err, item) => {
        if (err) {
            res.status(500);
            return next(err);
        } else if (!item) {
            res.status(404)
            return next(new Error("No item found."));
        }
        return res.send(item);
    });
});

storeRouter.post("/nails", (req, res, next) => {
    let item = new Item(req.body);
    item.save(function (err, newItem) {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(201).send(newItem);
    });
});

storeRouter.put("/nails/:itemId", (req, res, next) => {
    Item.findOneAndUpdate(
        { _id: req.params.itemId },
        req.body,
        { new: true },
        (err, todo) => {
            if (err) {
                console.log("Error");
                res.status(500);
                return next(err);
            }
            return res.send(todo);
        }
    );
});

storeRouter.delete("/nails/:itemId", (req, res, next) => {
    Item.findOneAndRemove({ _id: req.params.todoId }, (err, todo) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(todo);
    });
});

module.exports = storeRouter;