// Modulo Express
const express = require('express')
// Instânciando modulo Express.Router
const router = express.Router()
// Modulo Logout
const logoutController = require('../controllers/logout_controller')

// Get
router.get('/', logoutController.logout)

// Exportando o router para modulo
module.exports = router