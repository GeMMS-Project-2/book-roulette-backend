const mongoose = require("../db/connections");
const Schema = mongoose.Schema;
// make a new book

const BookSchema = new Schema({
  title: { type: String, require: true },
  author: String,
  // genre: { type: String, require: true },
  genre: String,
  img: String,
  filmAdaptation: Boolean,
  description: String
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;


