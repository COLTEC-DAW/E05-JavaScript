var palavra = prompt("Digite a palavra para descobrir se é um palindromo: ");

var arvalap = palavra.split("").reverse().join("");
console.log(arvalap);

//arvalap é palavra ao contrário

if (palavra === arvalap) {
    console.log("É um palindromo!");
} else {
    console.log("Não é um palindromo");
}