const LocalStorage = require('node-localstorage').LocalStorage
const localstorage = new LocalStorage('./scratch')

exports.logout = (req,res)=>{
    localstorage.removeItem('usuario')
    localstorage.removeItem('admin')
    res.redirect('/login')
}