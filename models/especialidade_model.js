//requisição do mongoose 
const mongoose  = require('mongoose')
const Especialidade = mongoose.model('especialidades',{
    especialidade: String
})
//exporta o modulo especialidade
module.exports = Especialidade