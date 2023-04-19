var palindromo = prompt("Escreva algo: ");
var bool = 0;

for (let i = 0; i < palindromo.length; i++) {
    if (palindromo.charAt(i) != palindromo.charAt(palindromo.length - i - 1)) {
        bool = 1;
        break;
    }
}

if (bool == 1) {
    console.log("Não é palindromo");
} else {
    console.log("É palindromo");
}
