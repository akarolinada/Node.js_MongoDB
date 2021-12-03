const mongoose = require('mongoose')
const Medicos = mongoose.model('medico', {
    nome:String,
    especialidade_select: String
})

mmodule.exports = Medicos