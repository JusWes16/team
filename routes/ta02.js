//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const express = require('express');
const router = express.Router();

const users = [];

router.post('/addUser', (req, res, next) => {
    users.push(req.body.username);
    res.redirect('/ta02/');
});

router.post('/removeUser', (req, res, next) => {
    users.forEach((user) =>{
        if(user == req.body.usernameRemove){
            users.splice(users.indexOf(user), 1);
        }
    });
    res.redirect('/ta02/');
});

router.get('/',(req, res, next) => {
    res.render('pages/ta02', { 
        title: 'Team Activity 02', 
        path: '/ta02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        users: users
    });
});

module.exports = router;