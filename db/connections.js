// db/connection.js
//=============================================================================
// Mongo Atlas Connection
//=============================================================================
require('dotenv').config();
const mongoose = require('mongoose');

// Mongo URL and Connection
// const mongoURI = process.env.DATABASE_URL;
const mongoURI =
  process.env.NODE_ENV === "production"
    ? process.env.PRODUCTION_DATABASE_URL
    : process.env.DEVELOPMENT_DATABASE_URL;

const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI);


// Define callback functions for various events
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected at: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

// Open the Connection
db.on('open', () => {
	console.log('✅ mongo connection made!');
});


module.exports = mongoose;

