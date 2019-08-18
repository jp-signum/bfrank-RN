const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AutoIncrement = require('mongoose-sequence')(mongoose);

const CartSchema = new Schema(
    {
        user: String,
        nails: [String]
}, {timestamps: true});

CartSchema.plugin(AutoIncrement, {inc_field: 'id'});

module.exports = mongoose.model('Cart', CartSchema);