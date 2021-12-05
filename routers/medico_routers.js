// Modulo Express
const express = require('express')
// Instânciando modulo Express.Router
const router = express.Router()

// Modulo medicosController
const medicosController = require('../controllers/medicos_controller')

// Rotas

// Post
router.post('/medico/cadastrar', medicosController.cadastrar_medico_post)
// Get
router.get('/listaMed', medicosController.listar_medico)

// Usuario
// Get
router.get('/listaMedico', medicosController.listar_medicoUser)

// Exportando o router para modulo
module.exports = router