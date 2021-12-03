const medicos_db = require("../models/medicos_model")


exports.cadastrar_medico_post = (req, res) => {
    const salva_medico = new medicos_db()

    salva_medico.nome = req.body.nome
    salva_medico.especialidade_select = req.body.especialidade_select

    salva_medico.save((erro) => {
        if (erro) throw erro
        res.redirect("/med_esp/cadastrar")
    })
}