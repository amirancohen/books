const path = require("path");
const mongoose = require("mongoose");
const Books = require("../models/Book");
const joi = require("joi");
const imagesFolder = path.resolve(__dirname, "../public/images");

module.exports = {
    getAll: async function (req, res, next) {
        try {
            const result = await Books.find({}).sort({ book: 1 });
            res.json(result);
        } catch (err) {
            console.log(err);
            res.status(400).json({ error: "error getting book" });
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

            const result = await Books.findOne({ _id: value._id });
            res.json(result);
        } catch (err) {
            console.log(err);
            res.status(400).json({ error: "error get the book" });
        }
    },

    add: async (req, res, next) => {
        try {
            const scheme = joi.object({
                namebook: joi.string().required(),
                description: joi.string().required(),
                image: joi.object().required(),
            });
            const reqData = { ...req.body, ...req.files };

            const { error, value } = scheme.validate(reqData);

            if (error) {
                console.log(error.details[0].message);
                res.status(400).json({ error: "invalid data" });
                return;
            }
            const fileName = req.files.image.name;
            await req.files.image.mv(`${imagesFolder}/${fileName}`);

            const newBook = new Books({
                namebook: value.namebook,
                description: value.description,
                image: fileName,
            });
            const result = await newBook.save();

            res.json(result);
        } catch (err) {
            console.log(err);
            res.status(400).json({ error: "error add book" });
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

            const deleted = await Books.findOne({ _id: value._id });

            await Books.deleteOne(value).exec();
            res.json(deleted);
        } catch (err) {
            console.log(err);
            res.status(400).json({ error: "error delete book" });
        }
    },

    edit: async function (req, res, next) {
        try {
            const scheme = joi.object({
                namebook: joi.string().required(),
                description: joi.string().required(),
                image: joi.string().optional(),
            });

            const { error, value } = scheme.validate(req.body);

            if (error) {
                console.log(error.details[0].message);
                res.status(400).json({ error: "invalid data" });
                return;
            }

            /* const book = await Books.findOneAndUpdate({
                _id: new mongoose.Types.ObjectId(req.params.id)
            }, value);*/
            const book = await Books.findById(req.params.id);

            if (!book) return res.status(404).send("Given ID was not found.");

            book.namebook = value.namebook;
            book.description = value.description;

            await book.save();

            const updated = await Books.findOne({ _id: req.params.id });
            res.json(updated);
        } catch (err) {
            console.log(err);
            res.status(400).json({ error: "fail to update data" });
        }
    },
};
