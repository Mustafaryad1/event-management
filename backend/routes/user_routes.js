const router = require('express').Router();
const userControllers = require('../controllers/user_controllers')
const passport = require('passport');

router.post('/register',
            passport.authenticate('signup',{session:false}),
            userControllers.register);

router.post('/login',
            passport.authenticate('login',{session:false}),
            userControllers.login);

module.exports = router