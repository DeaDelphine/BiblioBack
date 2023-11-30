const { mongoose, Schema } = require("mongoose");

const borrowedBookSchema = new Schema({
    bookId: { type: Schema.Types.ObjectId, ref: "Book" },
    userId: { type: Schema.Types.ObjectId, ref: "User" }, 
    borrow: { type:Boolean, default: false }
});

const BorrowedBook = mongoose.model("BorrowedBook", borrowedBookSchema);

module.exports = BorrowedBook;