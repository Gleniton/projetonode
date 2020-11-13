const maxValue = 60;
const minValue = 1;
module.exports = {
    getRandomNumber(min, max) {
        return Math.floor(Math.random() * max) + min;
    },
    sorteioValido(qtdNumeros, min, max) {
        if (!(min >= minValue && max <= maxValue)) {
            return false;
        }

        if (((max - min) + 1) < qtdNumeros) {
            return false;
        }

        return true;
    },
    sortearNumeros(qtdNumeros, min, max) {
        let numeros = [];

        if (!this.sorteioValido(qtdNumeros, min, max)) {
            return [];
        }

        while(numeros.length <= qtdNumeros) {
            let numeroSorteado = this.getRandomNumber(min, max);
            if (! numeros.includes(numeroSorteado)) {
                numeros.push(numeroSorteado);
            }
        }

        return numeros.sort((a, b) => a - b);
    }
}