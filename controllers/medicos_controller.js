const medicos_db = require("../models/medicos_model");
const especialidade_db = require("../models/especialidade_model");
const LocalStorage = require("node-localstorage").LocalStorage;
const localstorage = new LocalStorage("./scratch");

exports.cadastrar_medico_post = (req, res) => {
  if (req.body.idMed == "") {
    if (localstorage.getItem("admin") != null) {
      const salva_medico = new medicos_db();

      salva_medico.nome = req.body.nome;
      salva_medico.especialidade_select = req.body.especialidade_select;

      salva_medico.save((erro) => {
        if (erro) throw erro;
        res.redirect("/med_esp/cadastrar");
      });
    } else {
      res.redirect("/login");
    }
  } else {
    medicos_db.findById(req.body.idMed, (erro, resposta) => {
      if (erro) throw erro;
      resposta.nome = req.body.nome;
      resposta.especialidade_select = req.body.especialidade_select
      resposta.save((erro) => {
        if (erro) throw erro;
        res.redirect("/med_esp/cadastrar");
      });
    });
  }
};

exports.listar_medico = (req, res) => {
  if (localstorage.getItem("admin") != null) {
    medicos_db.find({}, (erro, resultado) => {
      if (erro) throw erro;
      res.render("views/pages/listaMedicos_ADM", { resultado });
    });
  } else {
    res.redirect("/login");
  }
};

exports.listar_medicoUser = (req, res) => {
  if (localstorage.getItem("usuario") != null) {
    medicos_db.find({}, (erro, resultado) => {
      if (erro) throw erro;
      res.render("views/pages/listaMedicos_USER", { resultado });
    });
  } else {
    res.redirect("/login");
  }
};

exports.deletar_medico = (req, res) => {
  const id = req.params.id;
  medicos_db.deleteOne({ _id: id }, (erro, resultado) => {
    if (erro) throw erro;
    res.redirect("/med_esp/listaMed");
  });
};

exports.editar_medico = (req, res) => {
  const resposta = [];
  especialidade_db.find({}, (erro, resultado) => {
    if (erro) throw erro;
    medicos_db.findById(req.params.id, (erro, resposta2) => {
      res.render("views/pages/cadastroMedicos", {
        resultado,
        resposta2,
        resposta,
      });
      console.log(resposta);
    });
  });
};
