const vogais = "AEIOUaeiou"

function existeEm (valor, array) {
    for (let i = 0; i < array.length; i++) {
        if (valor == array[i]) return true;
    }

    return false;
}

function vogalMaiuscula (string) {
    let novaString = "";

    for (let i = 0; i < string.length; i++) {
        if (existeEm(string[i], vogais)) novaString += string[i].toUpperCase();
        else novaString += string[i];
    }

    return novaString;
}

function vogalMinuscula (string) {
    let novaString = "";

    for (let i = 0; i < string.length; i++) {
        if (existeEm(string[i], vogais)) novaString += string[i].toLowerCase();
        else novaString += string[i];
    }

    return novaString;
}

function consoanteMaiuscula (string) {
    let novaString = "";

    for (let i = 0; i < string.length; i++) {
        if (!existeEm(string[i], vogais)) novaString += string[i].toUpperCase();
        else novaString += string[i];
    }

    return novaString;
}

function consoanteMinuscula (string) {
    let novaString = "";

    for (let i = 0; i < string.length; i++) {
        if (!existeEm(string[i], vogais)) novaString += string[i].toLowerCase();
        else novaString += string[i];
    }

    return novaString;
}


let string = prompt("Digite a string: ");
let funcoes = [vogalMaiuscula, vogalMinuscula, consoanteMaiuscula, consoanteMinuscula];

for (let i=0; i < 4; i++) {
    console.log(funcoes[i].name + ": " + funcoes[i](string));
}