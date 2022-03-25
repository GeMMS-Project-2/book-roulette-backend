

const express = require ('express');
const app = express();
const cors = require('cors');
const bookController = require('./controllers/bookController');

app.set('port', process.env.PORT || 8000);


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


app.get('/', (req, res) => {
    res.redirect('/books');

});


 app.use('/books', bookController);


app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`);
})