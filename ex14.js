function verificaNumero(num, criteria) {
    return criteria(num);
}

function ehImpar(num) {
    return (num % 2 != 0);
}

function ehPrimo(num) {
    var contador = 0;
    // O maior divisor de um número, antes dele mesmo, é sua metade.
    // Como todo número é divisível por 1, começa a contagem no 2
    for (var i = 2; i <= (num / 2); i++) {
        if (num % i == 0) {
            contador++;
            break;
        }
    }

    // Se o número for primo, retorna true; caso contrário, retorna false
    return (contador == 0);
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------

console.log(verificaNumero(7, ehPrimo) ? "É primo!" : "Não é primo.");
console.log(verificaNumero(6, ehImpar) ? "É ímpar!" : "Não é ímpar.");