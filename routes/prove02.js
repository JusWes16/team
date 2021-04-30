const express = require('express');
const router = express.Router();

// let books = [];

router.post('/addBookInfo', (req, res, next) => {
    let books = [];
    let bookInfo = {};
    bookInfo.title = req.body.bookTitle;
    bookInfo.description = req.body.bookSummary;

    books.push(bookInfo);

    res.redirect('/prove02/bookDisplay');
});

router.get('/bookDisplay',(req, res, next) => {
    res.render('pages/prove02Display', { 
        title: 'Your Books ', 
        path: '/prove02', // For pug, EJS 
        books: books
    });
    console.log(books)
});

router.get('/',(req, res, next) => {
    res.render('pages/prove02', { 
        title: 'Prove Activity 02', 
        path: '/prove02', // For pug, EJS 
    });
});

module.exports = router;

// title: 'Island', description: 'This is a great book!'