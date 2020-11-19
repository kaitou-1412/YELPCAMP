const express = require("express");
const router = express.Router();
const passport = require('passport');
const usersController = require('../controllers/users');
const catchAsync = require('../utils/catchAsync');

router.route('/register')
    .get(usersController.renderRegisterForm)
    .post(catchAsync(usersController.registerUser));

router.route('/login')
    .get(usersController.renderLoginForm)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), catchAsync(usersController.loginUser));

router.get('/logout', usersController.logoutUser);

module.exports = router;