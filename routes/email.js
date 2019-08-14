const express = require('express');
const User = require('../models/user')
const emailRouter = express.Router()
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken')
require('dotenv').config()

emailRouter.post('/forgot', (req, res, next) => {
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if (err) {
            res.status(500)
            return next(err);
        } // If that user isn't in the database OR the password is wrong:
        else if (!user) {
           res.status(403);
           return next(new Error('Username or password are incorrect'));
        }

        const token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: user.withoutPassword()}, 
            process.env.SECRET
        );

        User.findOneAndUpdate(
            { _id: user._id },
            { $set: { rpt : token } },
            { new: true },
            (err, user) => {
                if (err) {
                    console.log('Error');
                    res.status(500);
                    return next(err);
                }
                console.log(user)
                // return res.send(user);
            }
        )

        // let htmlEmail = `
        //     <div style=''>
        //         <p>You are receiving this email because you (or someone else) has requested the rest of the password for your accoun. Please click on the following link, or paste this into your browser to complete the process. The link will expire in one hour:</p>
        //         <p>https://www.ravenailz.com/reset/${token}</p>
        //         <p>If you did not request this please ignore this email to keep your account secure.</p>
        //     </div>
        // `

         let htmlEmail = `
            <div style=''>
                <p>You are receiving this email because you (or someone else) has requested the rest of the password for your accoun. Please click on the following link, or paste this into your browser to complete the process. The link will expire in one hour:</p>
                <p>localhost3000/forgot/${token}</p>
                <p>If you did not request this please ignore this email to keep your account secure.</p>
            </div>
        `

        const mailerConfig = {
            host: 'smtp.office365.com',
            secureConnection: true,
            port: 587,
            auth: {
                user: process.env.MCUSER,
                pass: process.env.MCPASS
            }
        };

        let transporter = nodemailer.createTransport(mailerConfig);

        let mailOptions = {
            from: 'info@ravenailz.com',
            to: user.username,
            subject: 'PASSWORD RESET - RAVENAILZ',
            text: '',
            html: htmlEmail,
        }
        
        transporter.sendMail(mailOptions, (err) => {
            if (err) {
                return console.log(err)
            }
            console.log('Email sent!')
        })
    
        res.send('{"message": "Recovery email sent!"}')
    });
});

module.exports = emailRouter;