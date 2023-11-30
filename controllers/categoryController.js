const Category = require("../models/categoryModel");

const allCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const postCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.json(category);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const getCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        res.json(category);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const putCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(category);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const removeCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        res.json(category);
    } catch (error) {
        res.json({ message: error.message });
    }
};

module.exports = { allCategories, postCategory, getCategory, putCategory, removeCategory };

