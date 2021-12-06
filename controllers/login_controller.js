// Módulo Login database
const login_db = require('../models/login_model')
// Módulo localstorage
const LocalStorage = require('node-localstorage').LocalStorage
// Nova instância da pasta localstorage .scratch
const localstorage = new LocalStorage('./scratch')

// Login get
exports.login_get = (req, res) => {
    if(localstorage.getItem('usuario') != null){
        res.redirect('/usuario/listaMedico')
    }else if(localstorage.getItem('admin') != null){
        res.redirect('/med_esp/cadastrar')
    }else{
        res.render('views/pages/login')
    }
}

// Login post
exports.login_post = (req, res) => {
    const usuario = req.body.usuario
    const senha = req.body.senha
    
    login_db.Login.findOne({usuario: usuario}, (erro, resultado) => {
        if(erro) throw erro
        console.log(resultado)
        
        if(resultado == null){
            res.redirect('/login')
        }else if(resultado.usuario == usuario && resultado.senha == senha && resultado.acesso == 'USER'){
            localstorage.setItem('usuario', usuario)
            res.redirect('/usuario/listaMedico')            
        }else if(resultado.usuario == usuario && resultado.senha == senha && resultado.acesso == 'ADM'){
            res.redirect('/med_esp/cadastrar')
            localstorage.setItem('admin', usuario)
        }else{
            res.redirect('/login')
        }
    })
}