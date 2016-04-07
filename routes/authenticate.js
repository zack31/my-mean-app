var express = require('express');
var router = express.Router();

module.exports = function(passport){

	router.get('/status', function(req, res) {
		if (!req.isAuthenticated()) {
			return res.status(200).json({
				status: false
			});
		}
		res.status(200).json({
			status: true
		});
	});

	//sends successful login state back to angular
	router.get('/success', function(req, res){
		res.send({state: 'success', user: req.user ? req.user : null});
	});

	//sends failure login state back to angular
	router.get('/failure', function(req, res){
		res.send({state: 'failure', user: null, message: "Invalid username or password"});
	});

	//sends failure signup
	router.get('/failuresignup', function(req, res){
		res.send({state: 'failure', user: null, message: "Username is already used !"});
	});

	//log in
	router.post('/login', passport.authenticate('login', {
		successRedirect: '/auth/success',
		failureRedirect: '/auth/failure'
	}));

	//sign up
	router.post('/signup', passport.authenticate('signup', {
		successRedirect: '/auth/success',
		failureRedirect: '/auth/failuresignup'
	}));

	//log out
	router.get('/signout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	return router;

}