const mongoose = require('mongoose')
const Schema = mongoose.Schema
require('mongoose-currency').loadType(mongoose);
let Currency = mongoose.Types.Currency;

const CartSchema = new Schema(
    {
        user: String,
        nails: [String],
        status: String,
        items: [{
            id: String,
            quantity: Number,
            item_details: {
                name: String,
                description: String,
                price: {
                    type: Currency
                },
                picture: String,
            }
        }]
    }
)


module.exports = mongoose.model('Cart', CartSchema);