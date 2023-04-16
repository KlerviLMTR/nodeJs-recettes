const express = require('express');
const router = express.Router();
const miamService = require('../services/MiamService');

router.get('/', function(req, res, next) {
  
     res.render('courses');

});

module.exports = router;
