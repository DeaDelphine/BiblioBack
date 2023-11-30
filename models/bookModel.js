const { mongoose, Schema } = require("mongoose");

const bookSchema = new Schema({
    title: { type: String, required: true },
    authorName: { type: String, required: true },
    categoryName: { type: String, required: true },
    image: { type: String },
    authorId: [{ type: Schema.Types.ObjectId, ref: "Author" }],
    categoryId: [{ type: Schema.Types.ObjectId, ref: "Category" }]
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;