const express = require('express')
const User = require('../models/user')
const authRouter = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

//(sign-up)
authRouter.post('/signup', (req, res, next) => {
    // try to find a user with the provided username. (If it already exists, them that the username is already taken.)
    User.findOne({ username: req.body.username }, (err, existingUser) => {
        if (err) {
            res.status(500);
            return next(err);
        } // If the db doesn't return "null" it means there's already a user with that username.  Send the error object to the global error handler on server file.
        else if (existingUser !== null) {
            res.status(400);
            return next(new Error('That username already exists if you forgot your password please follow the instructions below'));
        } // If the function reaches this point and hasn't returned already, it is safe to create the new user in the database.
        const newUser = new User(req.body)
        newUser.save((err, user) => {
            if (err) return res.status(500).send({ sucess: false, err })
            // If the user signs up, give them a token right now so they don't then immediately have to log in as well.
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
            return res.status(201).send({ user: user.withoutPassword(), token });
        })
    })
});

//(login)
authRouter.post('/login', (req, res, next) => {
    // Try to find the user with the submitted username (lowercased)
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if (err) {
            res.status(500)
            return next(err);
        } // If that user isn't in the database OR the password is wrong:
        else if (!user) {
            res.status(403);
            return next(new Error('Username or password are incorrect'));
        }
        user.checkPassword(req.body.password, (err, match) => {
            if (err) return res.status(500).send(err)
            if (!match) res.status(401).send({ message: 'Username or password are incorrect' })
            // If username and password both match an entry in the database, create a JWT. Then add the user object as the payload and pass in the secret.
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
            // Send the token back to the client app.
            return res.send({ user: user.withoutPassword(), token })
        })
    });
});

//(login -> admin)
authRouter.post('/login/admin', (req, res, next) => {
    // Try to find the user with the submitted username (lowercased)
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if (err) {
            res.status(500)
            return next(err);
        } // If that user isn't in the database OR the password is wrong:
        else if (!user) {
            res.status(403);
            return next(new Error('Username or password are incorrect'));
        }
        if (user.isAdmin === false) {
            return res.status(403).send('Access denied.')
        }
        user.checkPassword(req.body.password, (err, match) => {
            if (err) return res.status(500).send(err)
            if (!match) res.status(401).send({ message: 'Username or password are incorrect' })
            // If username and password both match an entry in the database, create a JWT. Then add the user object as the payload and pass in the secret.
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
            // Send the token back to the client app.
            return res.send({ user: user.withoutPassword(), token })
        })
    });
});

// pw reset
authRouter.post('/reset', (req, res, next) => {
    // Try to find the user with the submitted username (lowercased)
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if (err) {
            res.status(500)
            return next(err);
        } // If that user isn't in the database OR the password is wrong:
        else if (!user) {
            res.status(403);
            return next(new Error('Username not found'));
        }

        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) return next(err);
            req.body.password = hash;

            console.log(req.body.password)

            User.findOneAndUpdate(
                { _id: user._id },
                { $set: { password: req.body.password } },
                { new: true },
                (err, user) => {
                    if (err) {
                        console.log('Error');
                        res.status(500);
                        return next(err);
                    }
                    console.log(user)
                    // return res.send(user);
                    const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
                    return res.status(201).send({ user: user.withoutPassword(), token });
                }
            )
        });





        // res.send('{"message": "Password sucessfully updated!"}')
    });
});

module.exports = authRouter;
