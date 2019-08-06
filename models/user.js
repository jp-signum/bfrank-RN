const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new Schema({
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    email: {
        type: String,
        lowercase: true,
        required: [true, "can't be blank"], 
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        unique: true,
        index: true
    },
    cart: {
        cart_id: {
            type: String,
            unique: true
        },
        nails: [String]
    }
}, {timestamps: true});

UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});

UserSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
        next();
    });
});

UserSchema.methods.checkPassword = function (passwordAttempt, callback) {
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if (err) return callback(err);
        callback(null, isMatch);
    });
};

UserSchema.methods.withoutPassword = function () {
    const user = this.toObject();
    delete user.password;
    return user;
};

module.exports = mongoose.model('User', UserSchema);