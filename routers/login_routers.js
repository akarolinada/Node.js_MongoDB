const express = require('express')
const router = express.Router()

const loginController = require('../controllers/login_controller')

router.get('/', loginController.login_get)
router.post('/check', loginController.login_post)

module.exports = router