// BASIC Config

const express = require ('express');
const app = express();
const cors = require('cors');
const bookController = require('./controllers/bookController');

app.set('port', process.env.PORT || 8000);

// Middleware

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
// Routes

// Redirect // base url 

app.get('/', (req, res) => {
    res.redirect('/books');

});



//  Start controllers Here 
 app.use('/books', bookController);



// END  controllers Here 

// Start Server
app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`);
})