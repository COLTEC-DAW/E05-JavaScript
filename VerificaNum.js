function verificarNumero(num, funcao) {
    return funcao(num);
}

function eImpar(num) {
    return num % 2 !== 0;
}

function ePrimo(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}
