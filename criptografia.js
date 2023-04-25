const valorAMaiusculo = 65;

function fazCifra (string, cifra, stringCifrada = "", i = 0) {
    if (i < string.length) {
        numChar = string[i].toUpperCase().charCodeAt(0) - 65;
        let novaString = stringCifrada.concat(cifra[numChar].toLowerCase());
        return fazCifra(string, cifra, novaString, i+1);
    }
    else return novaString;
}

function cifraCesar (string, stringCifrada = "", i = 0) {
    if (i < string.length) {
        let numChar = string.toUpperCase().charCodeAt(i) - valorAMaiusculo - 3;
        let novoChar = 

        numChar = string[i].toUpperCase().charCodeAt(0) - 65;
        let novaString = stringCifrada.concat(cifra[numChar].toLowerCase());
        return fazCifra(string, cifra, novaString, i+1);
    }
    else return novaString;
}
}

let string = prompt("Digite a string: ");
let cifra = prompt("Digite a cifra: ");

console.log("Sua string é: " + string + "\nSua string criptografada é: " + fazCifra(string, cifra));