const valorZMaiusculo = 90;
const tamanhoAlfabeto = 26;
const valorCifraCesar = 3;

function cifraCesar (string, stringCifrada = "", i = 0) {
    if (i < string.length) {
        let numChar = string.toUpperCase().charCodeAt(i);

        if (numChar > valorZMaiusculo - valorCifraCesar) numChar -= tamanhoAlfabeto; // Se for Z, Y ou X, loopa pro início do alfabeto antes de terminar a operação

        numChar += valorCifraCesar;
        let novoChar = String.fromCharCode(numChar).toUpperCase();

        let novaString = stringCifrada.concat(novoChar);
        return cifraCesar(string, novaString, i+1);
    }
    else return stringCifrada;
}

function recebeString(funcao) {
    let string = prompt("Digite a string: ");

    console.log("Sua string é: " + string + "\nSua string criptografada é: " + funcao(string));
}

recebeString(cifraCesar);