// Módulo localstorage
const LocalStorage = require('node-localstorage').LocalStorage
// Nova instância da pasta localstorage .scratch
const localstorage = new LocalStorage('./scratch')

// Logout
exports.logout = (req,res)=>{
    localstorage.removeItem('usuario')
    localstorage.removeItem('admin')
    res.redirect('/login')
}