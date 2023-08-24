const express = require('express')
const router = express.Router()
const apiController = require('../controllers/apiController')
const {buscarpornumero} = require('../middlewares/validarnum')
const checks = require('../middlewares/checks')
const {validarChecks} = require('../middlewares/validarchecks')
const {repeticion} = require('../middlewares/validarrepeticion')

router.get('/info', apiController.info)
router.get('/buscarpornumero/:numero', buscarpornumero , apiController.buscarpornumero)
router.post('/crear',checks,validarChecks, repeticion, apiController.crear)
router.put('/editar/:numero',buscarpornumero,checks,validarChecks,apiController.editar)
router.delete('/eliminar/:numero',buscarpornumero, apiController.eliminar)

module.exports = router