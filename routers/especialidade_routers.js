// Modulo Express
const express = require('express')
// Instânciando modulo Express.Router
const router = express.Router()

// Modulo especialidadeController
const especialidadeController = require('../controllers/especialidade_controller')

// Rotas

// Get
router.get('/cadastrar', especialidadeController.cadastrar_especialidade_get)
// Post
router.post('/especialidade/cadastrar', especialidadeController.cadastrar_especialidade_post)
// Get
router.get('/listaEsp',especialidadeController.listar_especialidade)
// Get
router.get('/deletar/:id', especialidadeController.deletar_especialidade)
// Get
router.get('/editar/:id', especialidadeController.editar_especialidade)

// Exportando o router para modulo
module.exports = router