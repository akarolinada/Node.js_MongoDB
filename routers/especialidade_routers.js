const express = require('express')
const router = express.Router()

const especialidadeController = require('../controllers/especialidade_controller')

router.get('/especialidade/cadastrar',especialidadeController.cadastrar_especialidade_get)
router.post('/especialidade/cadastrar',especialidadeController.cadastrar_especialidade_post)

module.exports = router