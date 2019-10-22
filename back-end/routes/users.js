var express = require('express');
var router = express.Router();
var {signup} = require('../controllers/user');

router.post('/signup',signup );

module.exports = router;
