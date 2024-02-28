const Recommendation = require("../models/Recommendation");
const joi = require("joi");

module.exports = {
    getAll: async function (req, res, next) {
        try {
            const result = await Recommendation.find({});
            return res.json(result);
        } catch (err) {
            console.log(err);
            res.status(400).json({ error: "error getting contact" });
        }
    },

    getItem: async function (req, res, next) {
        try {
            const scheme = joi.object({
                id: joi.string().required(),
            });

            const { error, value } = scheme.validate(req.params);

            if (error) {
                console.log(error.details[0].message);
                return res.status(400).json({ error: "invalid data" });
            }

            const result = await Recommendation.findById(value.id);
            if (!result) {
                return res.status(404);
            }
            return res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(400).json({ error: "error get the contact" });
        }
    },

    add: async function (req, res, next) {
        try {
            const scheme = joi.object({
                name: joi.string().required(),
                recommendation: joi.string().required(),
            });

            const { error, value } = scheme.validate(req.body);

            if (error) {
                console.log(error.details[0].message);
                res.status(400).json({ error: "invalid data" });
                return;
            }

            const newContact = new Recommendation(value);
            const result = await newContact.save();

            res.json({
                ...value,
                _id: result._id,
            });
        } catch (err) {
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

            const deleted = await Recommendation.findOne({ _id: value._id });

            await Recommendation.deleteOne(value).exec();
            res.json(deleted);
        } catch (err) {
            console.log(err);
            res.status(400).json({ error: "error delete Contact" });
        }
    },

    edit: async function (req, res, next) {
        try {
            const scheme = joi.object({
                name: joi.string().required(),
                recommendation: joi.string().required(),
            });

            const { error, value } = scheme.validate(req.body);

            if (error) {
                console.log(error.details[0].message);
                res.status(400).json({ error: "invalid data" });
                return;
            }

            const contact = await Recommendation.findOneAndUpdate(
                {
                    _id: req.params.id,
                },
                value
            );

            if (!contact)
                return res.status(404).send("Given ID was not found.");

            const updated = await Recommendation.findOne({
                _id: req.params.id,
            });
            res.json(updated);
        } catch (err) {
            console.log(err);
            res.status(400).json({ error: "fail to update data" });
        }
    },
};
