const Borrow = require("../models/borrowModel");

const allBorrows = async (req, res) => {   
    try {
        const borrows = await Borrow.find();
        res.json(borrows);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const postBorrow = async (req, res) => {
    try {
        const borrow = await Borrow.create(req.body);
        res.json(borrow);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const getBorrow = async (req, res) => {
    try {
        const borrow = await Borrow.findById(req.params.id);
        res.json(borrow);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const putBorrow = async (req, res) => {
    try {
        const borrow = await Borrow.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(borrow);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const removeBorrow = async (req, res) => {
    try {
        const borrow = await Borrow.findByIdAndDelete(req.params.id);
        res.json(borrow);
    } catch (error) {
        res.json({ message: error.message });
    }
};

module.exports = { allBorrows, postBorrow, getBorrow, putBorrow, removeBorrow };
