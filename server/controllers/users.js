const { User } = require('../models/User');
const joi = require('joi');
// const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config/dev');

module.exports = {
    login: async function (req, res, next) {

        const schema = joi.object({
            email: joi.string().required().min(6).max(256).email(),
            password: joi.string().required().min(6).max(12),
        });

        const { error, value } = schema.validate(req.body);

        if (error) {
            console.log(error.details[0].message);
            return res.status(401).send('Unauthorized');
        }

        try {
            const user = await User.findOne({ email: value.email });
            if (!user) throw Error;
            const validPassword = await bcrypt.compare(value.password, user.password);
            if (!validPassword) throw 'Invalid password';

            const param = { userId: user._id };
            const token = jwt.sign(param, config.jwt_token, { expiresIn: '72800s' });
            res.cookie('token', token, { maxAge: 1000000, httpOnly: true});
            return res.status(200);
        }
        catch (err) {
            console.log(err);
            res.status(400).send('Invalid data.');
        }
    },

    signup: async function (req, res, next) {
        const schema = joi.object({
            email: joi.string().min(6).max(255).required().email(),
            password: joi.string().min(6).max(1024).required(),
        });

        const { error, value } = schema.validate(req.body);

        if (error) {
            console.log(error.details[0].message);
            res.status(400).json({ error: 'error sign up new user' });
            return;
        }

        try {
            const user = await User.findOne({ email: value.email });
            if (user) {
                return res.status(400).json({ error: "User already registered." });
            }

            const hash = await bcrypt.hash(value.password, 10);

            const newUser = new User({
                email: value.email,
                password: hash,
            });

            await newUser.save();

            res.json({
                id: newUser._id,
                email: newUser.email
            })
        }
        catch (err) {
            console.log(err.message);
            res.status(400).json({ error: 'error sign up new user' });
        }
    },

    me: async(req, res) => {
        const token = req.cookies.token
        var decoded = jwt.verify(token, config.jwt_token);
        const user = await  User.findById(decoded.userId)
        if(!user){
            return res.status(404)
        }
        return res.status(200).json({
            isAdmin: user.isAdmin,
            id: user._id,
            email: user.email,
        })
    }
}