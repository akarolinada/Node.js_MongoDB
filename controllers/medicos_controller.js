const medicos_db = require("../models/medicos_model")
const LocalStorage = require('node-localstorage').LocalStorage
const localstorage = new LocalStorage('./scratch')

exports.cadastrar_medico_post = (req, res) => {
    if(localstorage.getItem('admin') != null){
        const salva_medico = new medicos_db()

        salva_medico.nome = req.body.nome
        salva_medico.especialidade_select = req.body.especialidade_select

        salva_medico.save((erro) => {
            if (erro) throw erro
            res.redirect("/med_esp/cadastrar")
        })
    }else{
        res.redirect('/login')
    }
}

exports.listar_medico = (req,res)=>{
    if(localstorage.getItem('admin') != null){
        medicos_db.find({},(erro,resultado)=>{
            if(erro)throw erro
            res.render('views/pages/listaMedicos_ADM',{resultado})
        })
    }else{
        res.redirect('/login')
    }
    
}

exports.listar_medicoUser = (req,res)=>{
    if(localstorage.getItem('usuario') != null){
        medicos_db.find({},(erro,resultado)=>{
            if(erro)throw erro
            res.render('views/pages/listaMedicos_USER',{resultado})
        })
    }else{
        res.redirect('/login')
    }
    
}