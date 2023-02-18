var express = require('express');
var router = express.Router();

const indexController = require('../app/controller/indexController');

/* GET home page. */
router.get('/', indexController.vIndex);

module.exports = router;
