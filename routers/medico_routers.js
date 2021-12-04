const express = require('express')
const router = express.Router()

const medicosController = require('../controllers/medicos_controller')

router.post('/medico/cadastrar', medicosController.cadastrar_medico_post)
router.get('/listaMed', medicosController.listar_medico)

// Usuario
router.get('/listaMedico', medicosController.listar_medicoUser)

module.exports = router