const fs = require('fs');
module.exports = {
    conteudo: '',
    retornarConteudoArquivo(caminhoArquivo = '') {
        if (!caminhoArquivo) {
            return this.conteudo;
        }

        this.conteudo = fs.readFileSync(caminhoArquivo,'utf8');
        return this.conteudo;
    }
}