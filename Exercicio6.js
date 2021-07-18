function mod(numero, mod) {
    if (numero % mod === 0) {
        return true;
    } else {
        return false;
    }
}

function mod2(numero) {
    return mod(numero, 2);
}

var numero = prompt("Digite um numero: ");
var div = prompt("Digite o divisor: ");

result = mod(numero, div);

if (result === true) {
    console.log("Divisivel por: " + div);
} else if (result === false) {
    console.log("Não divisivel por: " + div);
}

result2 = mod2(numero);

if (result2 === true) {
    console.log("Dividido por 2");
} else if (result2 === false) {
    console.log("Nao divisel por 2");
}