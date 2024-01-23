const  Contact  = require('../models/Contact');
const joi = require('joi');

module.exports = {
    getAll: async function (req, res, next) {
        try {
            const result = await Contact.find({}).sort({ "contact": 1 });
            res.json(result);
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ error: 'error getting contact' });
        }
    },

    getItem: async function (req, res, next) {
        try {
            const scheme = joi.object({
                _id: joi.string().required(),
            });

            const { error, value } = scheme.validate({ _id: req.params.id });

            if (error) {
                console.log(error.details[0].message);
                res.status(400).json({ error: "invalid data" });
                return;
            }

            const result = await Contact.findOne({ _id: value._id });
            res.json(result);
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ error: "error get the contact" });
        }
    },

    add: async function (req, res, next) {
        try {
            const scheme = joi.object({
                fullname: joi.string().required(),
                fulltext: joi.string().required(),
                
            });

            const { error, value } = scheme.validate(req.body);

            if (error) {
                console.log(error.details[0].message);
                res.status(400).json({ error: "invalid data" });
                return;
            }

            const newContact = new Contact(value);
            const result = await newContact.save();

            res.json({
                ...value,
                _id: result._id
            });
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ error: "error add contact" });
        }
    },

    delete: async function (req, res, next) {
        try {
            const scheme = joi.object({
                _id: joi.string().required(),
            });

            const { error, value } = scheme.validate({ _id: req.params.id });

            if (error) {
                console.log(error.details[0].message);
                res.status(400).json({ error: "invalid data" });
                return;
            }

            const deleted = await Contact.findOne({ _id: value._id });

            await Contact.deleteOne(value).exec();
            res.json(deleted);
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ error: "error delete Contact" });
        }
    },

    edit: async function (req, res, next) {
        try {
            const scheme = joi.object({
                fullname: joi.string().required(),
                fulltext: joi.string().required(),
                
            });

            const { error, value } = scheme.validate(req.body);

            if (error) {
                console.log(error.details[0].message);
                res.status(400).json({ error: "invalid data" });
                return;
            }

            const contact = await Contact.findOneAndUpdate({
                _id: req.params.id
            }, value);

            if (!contact) return res.status(404).send('Given ID was not found.');

            const updated = await Contact.findOne({ _id: req.params.id });
            res.json(updated);
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ error: "fail to update data" });
        }
    },
}