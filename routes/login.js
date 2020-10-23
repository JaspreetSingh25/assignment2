const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user.js');

const { ensureAuthenticated } = require('../auth.js');

router.get('/login', (req, res) => res.render('login/login.ejs'))
router.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.render('dashboard.ejs', { user: req.user })
}
)


router.post('/editcontact', ensureAuthenticated, (req, res) => {
var phone = "12345";    
var obj = {name: "Hi", phonenum: "12345", email: "jassu@gmail.com"}
    User.update( 
        { "_id" : req.user._id} , 
        { "$pull" : { "contacts" : { "phonenum" :  phone } } } , 
        { "multi" : false }  
    ).then((d) => console.log(d)).catch(error => console.log(error))
   
    User.update( 
        { "_id" : req.user._id} , 
        { "$push" : { "contacts" : obj } } , 
        { "multi" : false }  
    ).then((d) => console.log(d)).catch(error => console.log(error)).then(e => res.redirect("/updatecontact"))
    
})

router.post('/deletecontact', ensureAuthenticated, (req, res) => {
var phone = "12345678";
User.update( 
    { "_id" : req.user._id} , 
    { "$pull" : { "contacts" : { "phonenum" :  phone } } } , 
    { "multi" : false }  
).then((d) => console.log(d)).catch(error => console.log(error))
res.redirect("/updatecontact")
})

router.get('/updatecontact', ensureAuthenticated, (req, res) => {
    res.render('updation.ejs', { user: req.user })
});

router.get('/', (req, res) => {
    res.send("PORTFOLIO")
})

router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/login');
});


router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next)

});



module.exports = router