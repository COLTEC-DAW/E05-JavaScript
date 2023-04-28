function contaChar (str, char, num = 0, i = 0) {
    if (i < str.length) {
        if (str[i] == char) return contaChar(str, char, num+1, i+1);
        else return contaChar(str, char, num, i+1);
    }
    else return num;
}

let string = prompt("Digite a string: ");
let char = prompt("Digite o caractere: ");
console.log("Número de \'" + char + "\' em \'" + string + "\': " +  contaChar(string, char));