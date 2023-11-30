const Author = require("../models/AuthorModel");

const allAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.json(authors);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const postAuthor = async (req, res) => {
    try {
        const author = await Author.create(req.body);
        res.json(author);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const getAuthor = async (req, res) => {
    try {
        const author = await Author.findById(req.params.id);
        res.json(author);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const putAuthor = async (req, res) => {
    try {
        const author = await Author.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(author);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const removeAuthor = async (req, res) => {
    try {
        const author = await Author.findByIdAndDelete(req.params.id);
        res.json(author);
    } catch (error) {
        res.json({ message: error.message });
    }
};

module.exports = { allAuthors, postAuthor, getAuthor, putAuthor, removeAuthor };