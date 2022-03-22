const mongoose = require("../db/connections");

// make a new book

const BookSchema = new mongoose.Schema({
  title: { type: String, required },
  author: String,
  genre: { type: String, required },
  img: String,
  filmAdaptation: Boolean,
  description: String,
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Person;


