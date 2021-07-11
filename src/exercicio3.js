var palindromo = function(palavra){
    // split separa a string em "substrings";
    // join tem como objetivo juntar as substrings;
    var teste = palavra.split("").reverse().join("");
    if(palavra == teste){
        return "True";
    } else if (palavra != teste) {
        return "False";
    } else {
        return "Erro no programa.";
    }
}

// main
var palavra = prompt("Qual palavra deseja verificar se é um palíndromo?");
console.log(palindromo(palavra));