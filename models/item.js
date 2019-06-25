const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
let Currency = mongoose.Types.Currency;

const ItemSchema = new Schema({
    name: String,
    price: {
        type: Currency
    },
    description: String,
    pictures: [String],
    quantity: {
        type: Number,
        default: null
    }
});

module.exports = mongoose.model('Item', ItemSchema);