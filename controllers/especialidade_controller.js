// Módulo especialidade database
const especialidade_db = require("../models/especialidade_model");
// Módulo localstorage
const LocalStorage = require("node-localstorage").LocalStorage;
// Nova instância da pasta localstorage .scratch
const localstorage = new LocalStorage("./scratch");

// Cadastrar especialidade e médicos Get
exports.cadastrar_especialidade_get = (req, res) => {
  const resposta2 = { especialidade_select: "Selecione a especialidade" };
  const acao = 'Cadastrar'
  const acao2 = 'Cadastrar'
  if (localstorage.getItem("admin") != null) {
    especialidade_db.find({}, (erro, resultado) => {
      const resposta = [];
      if (erro) throw erro;
      res.render("views/pages/cadastroMedicos", {
        resultado,
        resposta,
        resposta2,
        acao,
        acao2
      });
      console.log(resultado);
    });
  } else {
    res.redirect("/login");
  }
};

// Cadastrar especialidade Post
exports.cadastrar_especialidade_post = (req, res) => {
  if (req.body.idEsp == "") {

    const salva_especialidade = new especialidade_db();

    salva_especialidade.especialidade = req.body.especialidades;

    salva_especialidade.save((erro) => {
      if (erro) throw erro;
      return res.redirect("/med_esp/cadastrar");
    });
  } else {
    especialidade_db.findById(req.body.idEsp, (erro, resposta) => {
      if (erro) throw erro;
      resposta.especialidade = req.body.especialidades;
      resposta.save((erro) => {
        if (erro) throw erro;
        res.redirect("/med_esp/cadastrar");
      });
    });
  }
};

// Listar especialidade Get
exports.listar_especialidade = (req, res) => {
  if (localstorage.getItem("admin") != null) {
    especialidade_db.find({}, (erro, resultado) => {
      if (erro) throw erro;
      res.render("views/pages/listaEspecialidade_ADM", { resultado });
    });
  }else{
    res.redirect('/login')
  }
};

// Deletar especialidade
exports.deletar_especialidade = (req, res) => {
  const id = req.params.id;
  especialidade_db.deleteOne({ _id: id }, (erro, resultado) => {
    if (erro) throw erro;
    res.redirect("/med_esp/listaEsp");
  });
};

// Editar especialidade
exports.editar_especialidade = (req, res) => {
  const resposta2 = { especialidade_select: "Selecione a especialidade" };
  const acao2 = 'Atualizar'
  const acao = 'Cadastrar'
  especialidade_db.find({}, (erro, resultado) => {
    if (erro) throw erro;
    especialidade_db.findById(req.params.id, (erro, resposta) => {
      res.render("views/pages/cadastroMedicos", {
        resultado,
        resposta,
        resposta2,
        acao,
        acao2
      });
    });
  });
};
