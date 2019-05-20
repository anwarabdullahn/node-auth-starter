const express = require('express'),
	router = express.Router(),
	passport = require('passport'),
	privateRouter = passport.authenticate('jwt', { session: false }),
    AuthController = require('./controllers/AuthController'),
    multer = require('./config/multerCloudinary')



