const express = require("express");
const app = express();

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/biblio_db');
console.log(`📚[DATABASE] MongoDB is running 🔥`)
}

const port = process.env.PORT || 6789;
//Routes
const bookRouter = require("./routes/bookRoute");
const authorRouter = require("./routes/authorRoute");
const borrowRouter = require("./routes/borrowRoute");
const categoryRouter = require("./routes/categoryRoute");



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/uploads', express.static('./uploads'));

//Utilisation des routes
app.use("/book", bookRouter);
app.use("/author", authorRouter);
app.use("/borrow", borrowRouter);
app.use("/category", categoryRouter);


app.listen(port, () => console.log(`[SERVER] is runinning on port ${port}`));