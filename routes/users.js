var express = require('express');
var router = express.Router();

const userController = require('../app/controller/userController.js');

// TODO: CURD Users
router.get('/signup', userController.viewFormSignup);

module.exports = router;
