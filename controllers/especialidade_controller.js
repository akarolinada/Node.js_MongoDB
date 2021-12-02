const especialidade_db = require('../models/especialidade_model')

exports.cadastrar_especialidade_get = (req,res)=>{
    especialidade_db.find({},(erro,resultado)=>{
        if(erro)throw erro
        res.render('views/pages/cadastroMedicos',{resultado})
    })
   
}

exports.cadastrar_especialidade_post = (req,res)=>{
    console.log('teste',req.body.especialidades)
    
   
        const salva_especialidade = new especialidade_db()

        salva_especialidade.especialidade = req.body.especialidades

        salva_especialidade.save((erro)=>{
            if(erro)throw erro
            return res.redirect('/med_esp/especialidade/cadastrar')
        })
       
    
    
}