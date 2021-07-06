function verificaPalindromo(palavra) {
    var tmp1 = palavra.split("").reverse().join("");

    if (palavra == tmp1) {
        console.log("É palíndromo!");
    } else {
        console.log("Não é palíndromo!");
    }
}

var palavra = prompt("Digite o suposto palíndromo: ");
verificaPalindromo(palavra);