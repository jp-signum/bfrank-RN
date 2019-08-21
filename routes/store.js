const express = require("express");
const storeRouter = express.Router();
const Item = require("../models/item");
const cloudinary = require('cloudinary')
const cmd = require('node-cmd');

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

//uploading multiple files with express-fileupload
storeRouter.post('/nails', (req, res, next) => {
    addItem = () => {
        let { name, price, description, quantity } = req.body
        let itemObj = { name, price, description, quantity }
        const files = Object.values(req.files)
        let clouds = files.map(file => cloudinary.uploader.upload(file.tempFilePath))
        Promise
            .all(clouds)
            .then(res => {
                let urls = res.map(cloud => cloud.url)
                let obj = { ...itemObj, pictures: urls }
                saveItem(obj)
                cmd.run('npm run sitemap')
                cmd.run('git add -A')
                cmd.run('git commit -m "updated sitemap"')
                cmd.run('git push')
            })
            .catch((err) => res.status(400).json(err))
        function saveItem(obj) {
            new Item(obj).save((err, item) => {
                if (err)
                    res.send(err)
                else if (!item)
                    res.send(400)
                else {
                    return res.status(200).send(item)
                }
                next()
            })
        }
    }
    addItem()
})

//editing an item with new shit
storeRouter.put('/nails/:itemId', (req, res, next) => {
    editItem = async () => {
        const { name, price, description, quantity } = req.body
        const updateObj = {}
        if (name) updateObj.name = name 
        if (price) updateObj.price = price
        if (description) updateObj.description = description
        if (quantity) updateObj.quantity = quantity
        if (req.files) {
            try {
                const files = Object.values(req.files)
                let clouds = files.map(file => cloudinary.uploader.upload(file.tempFilePath))
                const res = await Promise.all(clouds)
                let urls = res.map(cloud => cloud.url)
                req.body.pictures = urls
            } catch (e) {
                res.status(400).json(e)
            }
        }

        Item.findOneAndUpdate(
            { _id: req.params.itemId },
            req.body,
            { new: true },
            (err, item) => {
                if (err) {
                    console.log('Error');
                    res.status(500);
                    return next(err);
                }
                return res.send(item);
            }
        )
    }
    editItem()
})

module.exports = storeRouter;