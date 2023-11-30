const { mongoose, Schema } = require("mongoose");

const categorySchema = new Schema({
    name: { type: String, required: true },
    bookId: [{ type: Schema.Types.ObjectId, ref: "Book" }]
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;