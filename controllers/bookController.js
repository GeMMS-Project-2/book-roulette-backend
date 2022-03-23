const express = require('express');
const router = express.Router();

const Book = require('../models/Book')

// get all books
// http://localhost:8000/books

// working version for Heroku 

// router.get('/', (req, res) => {
//     Book.find({}).then((books) => res.json(books)
//     .catch((err) => console.error(err)))
// });






// http://localhost:8000/books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        if(books) {
            res.json(books);
        } else {
            res.sendStatus(404);
        }
        
    } catch (error) {
        console.log(error)
        
    };
});


// GET BOOK by ID 
// http://localhost:8000/books/623a69a6674c3d818fa9e63c



router.get('/:id', async (req, res) => {
    try {
        const books = await Book.findById(req.params.id);
        if(books) {
            res.json(books);
        } else {
            res.sendStatus(404);
        }
        
    } catch (error) {
        console.log(error)
        
    };
});

// GET BOOK by Title
// http://localhost:8000/books/623a69a6674c3d818fa9e63c

//http://localhost:8000/books/The Hound of the Baskervilles

router.get('/:title', async (req, res) => {
    try {
        const books = await Book.find(req.params.title);
        if(books) {
            res.json(books);
        } else {
            res.sendStatus(404);
        }
        
    } catch (error) {
        console.log(error)
        
    };
});

// GET BOOK by GENRE 
// http://localhost:8000/books/623a69a6674c3d818fa9e63c


router.get('/:genre', async (req, res) => {
    try {
        const books = await Book.findById(req.params.genre);
        if(books) {
            res.json(books);
        } else {
            res.sendStatus(404);
        }
        
    } catch (error) {
        console.log(error)
        
    };
});






// create book 
// http://localhost:8000/books

// {
//     "title": "Things We Never Got Over",
//     "author": "Lucy Score",
//     "genre": "Romance",
//     "img": "https://i.imgur.com/w98SLeS.jpg",
//     "filmAdaptation": "false",
//     "description": "Bearded, bad-boy barber Knox prefers to live his life the way he takes his coffee: Alone. Unless you count his basset hound, Waylon.Knox doesn’t tolerate drama, even when it comes in the form of a stranded runaway bride.Naomi wasn’t just running away from her wedding. She was riding to the rescue of her estranged twin to Knockemout, Virginia, a rough-around-the-edges town where disputes are settled the old-fashioned way…with fists and beer. Usually in that order.Too bad for Naomi her evil twin hasn’t changed at all. After helping herself to Naomi’s car and cash, Tina leaves her with something unexpected. The niece Naomi didn’t know she had. Now she’s stuck in town with no car, no job, no plan, and no home with an 11-year-old going on thirty to take care of.There’s a reason Knox doesn’t do complications or high-maintenance women, especially not the romantic ones. But since Naomi’s life imploded right in front of him, the least he can do is help her out of her jam. And just as soon as she stops getting into new trouble he can leave her alone and get back to his peaceful, solitary life.At least, that’s the plan until the trouble turns to real danger."
//  }


// create new Book 

router.post('/', (req, res) => {
    const newBook = req.body;
    Book.create(newBook)
    .then((book) => {
        res.json(book)
    });
});



// Update Book 
// http://localhost:8000/books/623a69a6674c3d818fa9e63c
// changed false to true 

router.put('/:id' , async (req, res) => {
    try {

        const updatedBook = req.body;
        const updatedDocument = await Book.findByIdAndUpdate(
            req.params.id,
            updatedBook,
            {new: true}
        );
        res.json(updatedDocument);
        
    } catch (error) {
        console.log(error);

        
    }
});

//  Delete Book 
// http://localhost:8000/books/

router.delete('/:id', async (req, res) => {
    try {

        const deleteBook = await Book.findByIdAndDelete(req.params.id);
        res.json(deleteBook);
        
    } catch (error) {
        console.log.error
        
    }
})













module.exports = router;
