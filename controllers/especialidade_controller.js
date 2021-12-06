//requisição da rota especialidade
const especialidade_db = require("../models/especialidade_model");
//seleção do campo especialidade
const resposta2 = {especialidade_select: 'Selecione a especialidade'}
//exporta o que foi selecionado do campo cadastrar especialidade e
//renderiza para rota cadastro medicos
exports.cadastrar_especialidade_get = (req, res) => {
    especialidade_db.find({}, (erro, resultado) => {
      const resposta = []
    if (erro) throw erro;
    res.render("views/pages/cadastroMedicos", { resultado, resposta, resposta2 });
    console.log(resultado);
  });
};
//aqu faz o post do cadastrar especialidades e envia para o banco de dados 
//os valores de especialidades 
exports.cadastrar_especialidade_post = (req, res) => {
  if(req.body.idEsp == ""){
    console.log("teste", req.body.especialidades);  
  
    const salva_especialidade = new especialidade_db();

    salva_especialidade.especialidade = req.body.especialidades;
    //salva os dados e redireciona para rota cadastrar
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
//usuario ADM lista as especialidades 
exports.listar_especialidade = (req, res) => {
  especialidade_db.find({}, (erro, resultado) => {
    if (erro) throw erro;
    res.render("views/pages/listaEspecialidade_ADM", { resultado });
  });
};
//usuario ADM tem a opção de deletar 
exports.deletar_especialidade = (req, res) => {
  const id = req.params.id;
  especialidade_db.deleteOne({ _id: id }, (erro, resultado) => {
    if (erro) throw erro;
    res.redirect("/med_esp/listaEsp");
  });
};
//usuario ADM edita as especialidades 
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
