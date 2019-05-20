const express = require('express'),
	router = express.Router(),
	passport = require('passport'),
	privateRouter = passport.authenticate('jwt', { session: false }),
    AuthController = require('./controllers/AuthController'),
    multer = require('./config/multerCloudinary')


router
	.get('/', (req, res) => res.send('Hello World'))
	// Authentication Routes
	.post('/register', AuthController.Register)
	.post('/login', AuthController.Login)
	