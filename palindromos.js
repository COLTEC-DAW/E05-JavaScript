var i;
var palavra = prompt("Digite a palavra: ")
var palindromo = palavra.split('');

for(i = 0; i < (palindromo.length/2); i++){
    if(palindromo[i] != palindromo[(palindromo.length - i - 1)]){
        alert("Nao eh palindromo");
    }
}

alert("Eh palindromo");
