const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
let Currency = mongoose.Types.Currency;

const ItemSchema = new Schema({
    name: String,
    description: String,
    price: {
        type: Currency
    },
    pictures: [String],
    quantity: {
        type: Number,
        default: null
    },
    carted: [{
        quantity: Number,
        cart_id: String,
        time: {
            type: Date,
            default: Date.now
        }
    }]
});

module.exports = mongoose.model('Item', ItemSchema);