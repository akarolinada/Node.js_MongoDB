//requisição do mongoose para exporta o login
const mongoose  = require('mongoose')
//exporta a página login 
exports.Login = mongoose.model('login', {
    usuario: String,
    senha: String,
    acesso: String
})