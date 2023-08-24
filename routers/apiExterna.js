const express = require('express');
const router = express.Router();
const apiExterna = require('../controllers/apiexternacontroller');

router.get('/pokemon/:name', apiExterna);

module.exports = router;