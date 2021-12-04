const mongoose  = require('mongoose')

exports.Login = mongoose.model('login', {
    usuario: String,
    senha: String,
    acesso: String
})