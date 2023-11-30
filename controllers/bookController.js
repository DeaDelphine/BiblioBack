const Book = require("../models/bookModel")

const allBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const postBook = async (req, res) => {
    const { title, authorName, categoryName } = req.body;
    const image = req.file.filename;
    try {
        const book = await Book.create({title, authorName, categoryName, image });
        res.json(book);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const getBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.json(book);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const putBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(book);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const removeBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        res.json(book);
    } catch (error) {
        res.json({ message: error.message });
    }
};




module.exports = {allBooks, postBook, getBook, putBook, removeBook};