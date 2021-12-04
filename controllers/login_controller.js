const login_db = require('../models/login_model')

exports.login_get = (req, res) => {
    res.render('views/pages/login')
}

exports.login_post = (req, res) => {
    const usuario = req.body.usuario
    const senha = req.body.senha
    
    login_db.Login.findOne({usuario: usuario}, (erro, resultado) => {
        if(erro) throw erro
        if(resultado == null){
            res.redirect('/login')
        }else if(resultado.usuario == usuario && resultado.senha == senha && resultado.acesso == 'USER'){
            res.redirect('/usuario/listaMedico')
            localStorage.setItem('usuario', usuario)
        }else if(resultado.usuario == usuario && resultado.senha == senha && resultado.acesso == 'ADM'){
            res.redirect('/med_esp/cadastrar')
            localStorage.setItem('admin', usuario)
        }
    })
}