// Modulo Express
const express = require('express')
// Instânciando modulo Express.Router
const router = express.Router()

// Modulo medicosController
const medicosController = require('../controllers/medicos_controller')
const { route } = require('./especialidade_routers')

// Rotas

// Post
router.post('/medico/cadastrar', medicosController.cadastrar_medico_post)
// Get
router.get('/listaMed', medicosController.listar_medico)

// Usuario
// Get
router.get('/listaMedico', medicosController.listar_medicoUser)

router.get('/deletarMed/:id', medicosController.deletar_medico)

router.get('/editarMed/:id', medicosController.editar_medico)

// Exportando o router para modulo
module.exports = router