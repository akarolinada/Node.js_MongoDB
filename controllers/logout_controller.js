const LocalStorage = require('node-localstorage').LocalStorage
const localstorage = new LocalStorage('./scratch')
//exporta os logout remove o usuário comum e ADM
exports.logout = (req,res)=>{
    localstorage.removeItem('usuario')
    localstorage.removeItem('admin')
    res.redirect('/login')
}