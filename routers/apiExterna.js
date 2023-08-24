const express = require('express');
const router = express.Router();
const apiExterna = require('../controllers/apiexternacontroller');

router.get('/pokemon/:name', apiExterna.BuscarPokemon);

module.exports = router;