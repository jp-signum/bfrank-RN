const express = require('express');
const inventoryRouter = express.Router();
const Item = require('../models/item');
const User = require('../models/user');
const Cart = require('../models/cart');

// add item to cart 
inventoryRouter.post('/a2c', (req, res, next) => {
    console.log(req.body)
    
    // if (req.body.username) {
    //     console.log('logged in')
    // } else {
    //     new Cart(obj).save((err, c) => {
    //         if (err)
    //             res.send(err)
    //         else if (!c)
    //             res.send(400)
    //         else {
    //             return res.status(200).send(c)
    //         }
    //         next()
    //     })
    // }
})

//uploading multiple files with express-fileupload
inventoryRouter.post('/nails', (req, res, next) => {
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

module.exports = inventoryRouter;