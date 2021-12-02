const mongoose  = require('mongoose')
const Especialidade = mongoose.model('especialidades',{
    especialidade: String
})

module.exports = Especialidade