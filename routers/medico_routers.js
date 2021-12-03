const express = require('express')
const router = express.Router()

const medicosController = require('../controllers/medicos_controller')

router.post('/medico/cadastrar', medicosController.cadastrar_medico_post)

module.exports = router