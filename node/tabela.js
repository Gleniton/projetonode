let sorteio = require('./sorteio');
module.exports = {
    gerarTabela(qtdNumerosSorteio, minSorteio, maxSorteio) {
        return sorteio.sortearNumeros(qtdNumerosSorteio, minSorteio, maxSorteio);
    }
}