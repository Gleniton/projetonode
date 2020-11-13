const express = require('express');
const app = express();
const path = require('path');
const tabela = require('./node/tabela');
const arquivo = require('./node/arquivo');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
const axios = require('axios');

const minSorteio = 1;
const maxSorteio = 60;
const qtdNumerosSorteio = 5;
const numeroTabelas = 3;

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render("index", { title: "Home", path: req.path  });
});

app.get('/sorteio', function (req, res) {
    tabelas = [];

    for (let i = 0; i < numeroTabelas; i++) {
        let novaTabela = tabela.gerarTabela(qtdNumerosSorteio, minSorteio, maxSorteio);
        tabelas.push(novaTabela);
    }

    res.render("sorteio_tabela", { title: "Sorteio", tabelas : tabelas});
});

app.get('/arquivo', function (req, res) {
    res.render("arquivo", { title: "Arquivo"});
});

app.post('/lerconteudoarquivo', upload.single('arquivo'), function (req, res, next) {
    conteudo = arquivo.retornarConteudoArquivo(req.file.path);
    res.render("arquivo", { title: "Arquivo", conteudo : conteudo});
});

app.get('/usuario', function (req, res) {
    axios.get('https://randomuser.me/api')
    .then(response => {
      usuario = response.data.results[0];
      res.render("usuario", { title: "Usuario", usuario : usuario});
    })
    .catch(error => {
        res.render("usuario", { title: "Usuario", err : 'API parece estar fora do ar'});
    });
});

app.listen(3000);