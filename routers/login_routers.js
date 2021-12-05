// Modulo Express
const express = require('express')
// Instânciando modulo Express.Router
const router = express.Router()

// Modulo loginController
const loginController = require('../controllers/login_controller')

// Rotas

// Get
router.get('/', loginController.login_get)
// Post
router.post('/check', loginController.login_post)

// Exportando o router para modulo
module.exports = router