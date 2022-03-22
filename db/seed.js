const mongoose = require ('../db/connections');

// import Book Model 

const Book = require ('../models/Book')

const bookSeeds = require('./seeds.json');

Book.deleteMany({}).then(() => {
    Book.insertMany(bookSeeds)
      .then((book) => {
        console.log("added book");
      })
      .catch(console.log.error)
      .finally(() => {
        process.exit;
      });
  })
  .catch((err) => console.error(err));





