const especialidade_db = require("../models/especialidade_model");
const resposta2 = {especialidade_select: 'Selecione a especialidade'}
exports.cadastrar_especialidade_get = (req, res) => {
    especialidade_db.find({}, (erro, resultado) => {
      const resposta = []
    if (erro) throw erro;
    res.render("views/pages/cadastroMedicos", { resultado, resposta, resposta2 });
    console.log(resultado);
  });
};

exports.cadastrar_especialidade_post = (req, res) => {
  if(req.body.idEsp == ""){
    console.log("teste", req.body.especialidades);  
  
    const salva_especialidade = new especialidade_db();

    salva_especialidade.especialidade = req.body.especialidades;

    salva_especialidade.save((erro) => {
      if (erro) throw erro;
      return res.redirect("/med_esp/cadastrar");
    });
  }else{
    especialidade_db.findById(req.body.idEsp, (erro, resposta) => {
      
      if(erro) throw erro
      resposta.especialidade = req.body.especialidades
      resposta.save((erro) => {
        if(erro) throw erro
        res.redirect('/med_esp/cadastrar')
      })

    })
  }
  
  }

exports.listar_especialidade = (req, res) => {
  especialidade_db.find({}, (erro, resultado) => {
    if (erro) throw erro;
    res.render("views/pages/listaEspecialidade_ADM", { resultado });
  });
};

exports.deletar_especialidade = (req, res) => {
  const id = req.params.id;
  especialidade_db.deleteOne({ _id: id }, (erro, resultado) => {
    if (erro) throw erro;
    res.redirect("/med_esp/listaEsp");
  });
};

exports.editar_especialidade = (req, res) => {
  const resposta2 = {especialidade_select: 'Selecione a especialidade'}
  especialidade_db.find({}, (erro, resultado) => {
  if (erro) throw erro;
  especialidade_db.findById(req.params.id, (erro, resposta) => {
    res.render("views/pages/cadastroMedicos", { resultado, resposta, resposta2});
    console.log(resposta);
  })
  
  
});
}
