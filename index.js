const express = require('express')
const app = express()
const mongoose = require('mongoose')
const porta = 3000

mongoose.connect('inclua seu banco de dados', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Estamos conectadas ao Banco de Dados')
})

app.set('view engine', 'ejs')
app.set('views', __dirname, '/views')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(__dirname +'/public'))


const especialidade_routers = require('./routers/especialidade_routers')
const medico_routers = require('./routers/medico_routers')
const login_routers = require('./routers/login_routers')
const logout_routers = require('./routers/logout_routers')


app.use('/med_esp', especialidade_routers, medico_routers)
app.use('/usuario', medico_routers)
app.use('/login', login_routers)
app.use('/logout', logout_routers)



app.listen(porta, () => {
    console.log('Servidor Conectado')
})
