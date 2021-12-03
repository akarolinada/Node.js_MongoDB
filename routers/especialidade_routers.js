const express = require('express')
const router = express.Router()

const especialidadeController = require('../controllers/especialidade_controller')

router.get('/cadastrar', especialidadeController.cadastrar_especialidade_get)
router.post('/especialidade/cadastrar', especialidadeController.cadastrar_especialidade_post)

router.get('/listaEsp',especialidadeController.listar_especialidade)

module.exports = router