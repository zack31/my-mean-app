
var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var User = mongoose.model('User');

//Used for routes that must be authenticated.
// function isAuthenticated (req, res, next) {
//     // if user is authenticated in the session, call the next() to call the next request handler
//     // Passport adds this method to request object. A middleware is allowed to add properties to
//     // request and response objects
//
//     //allow all get request methods
//     if(req.method === "GET"){
//         return next();
//     }
//     if (req.isAuthenticated()){
//         return next();
//     }
//
//     // if the user is not authenticated then redirect him to the login page
//     return res.redirect('/#login');
// };
//
// //Register the authentication middleware
// router.use('/Users', isAuthenticated);

router.route('/users')
    //creates a new post
    .post(function(req, res){
        console.log(req.query);

        var user = new User();
        user.username = req.query.username;
        user.password = req.query.password;
        user.mail = req.query.mail;

        console.log(user);
        user.save(function(err, user) {
            if (err){
                return res.send(500, err);
            }
            return res.json(user);
        });
    })
    //gets all users
    .get(function(req, res){
        User.find(function(err, users){
            if(err){
                return res.send(500, err);
            }
            return res.send(200,users);
        });
    });

//post-specific commands.
router.route('/users/:id')
    //gets specified user
    .get(function(req, res){
        User.findById(req.query.id, function(err, user){
            if(err)
                res.send(err);
            res.json(user);
        });
    })
    //updates specified user
    .put(function(req, res){
        User.findById(req.query.id, function(err, user){
            if(err)
            {
                res.send(err);
            }
            else
            {
                if (req.query.username != undefined)
                    user.username = req.query.username;
                if (req.query.password != undefined)
                    user.password = req.query.password;
                if (req.query.mail != undefined)
                    user.mail = req.query.mail;
                user.save(function (err, user) {
                    if (err)
                        res.send(err);
                    res.json(user);
                });
            }
        });
    })
    //deletes the user
    .delete(function(req, res) {
        console.log(req.params);
        User.remove({
            _id: req.params.id
        }, function(err) {
            if (err)
                res.send(err);
            res.json("User deleted !");
        });
    });

module.exports = router;