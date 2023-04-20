// Função que retorna o menor de dois valores
function min(a, b) {
    if(a<b) {
        return a;
    } else {
        return b;
    }
}

// Função que retorna o maior de dois valores
function max(a,b) {
    if(a>b) {
        return a;
    } else {
        return b;
    }
}

// Teste
console.log("Min: " + min(5,2));
console.log("Max: " + max(3,5));