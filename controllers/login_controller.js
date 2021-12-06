//requisição da página login 
const login_db = require('../models/login_model')
//requisição da pagina fica armazenado no local storage 
const LocalStorage = require('node-localstorage').LocalStorage
const localstorage = new LocalStorage('./scratch')
//exporta e verifica qual o usuário se é login do ADM ou usuário comum
exports.login_get = (req, res) => {
    if(localstorage.getItem('usuario') != null){
        res.redirect('/usuario/listaMedico')
    }else if(localstorage.getItem('admin') != null){
        res.redirect('/med_esp/cadastrar')
    }else{
        res.render('views/pages/login')
    }    

}
//faz o post dos inputs de usuario e senha
exports.login_post = (req, res) => {
    const usuario = req.body.usuario
    const senha = req.body.senha
    
    //verificação de usuario e senha 
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