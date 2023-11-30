const { mongoose, Schema } = require("mongoose");


const authorSchema = new Schema({
    name: { type: String, required: true },
    bookId: [{ type: Schema.Types.ObjectId, ref: "Book" }]
});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;