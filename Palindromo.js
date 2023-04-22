var palavra = prompt("Digite uma palavra para verificar se ela e palindromo: ");
var palindromo = true;

for(var i = 0; i < palavra.length; i++){
    if (palavra.charAt(i) != palavra.charAt(palavra.length-i-1)){
        console.log("Nao e um palindromo")
        palindromo = false;
        break;
    }
}

if (palindromo == true){
    console.log("E um palindromo")
}