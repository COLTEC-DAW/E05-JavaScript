var palavraOriginal = prompt("Escreva uma palavra: ");
var tamanho = palavraOriginal.length - 1;
var verifica = 0;

var palavra = palavraOriginal.toLocaleLowerCase();


for (let comp = 0; comp < palavra.length; comp++){

    if(palavra[comp] == palavra[tamanho - comp]){

        verifica++;

    }

}

if(verifica == palavra.length){

    document.writeln("A palavra ", palavraOriginal," é um palíndromo!");

} else {

    document.writeln("A palavra ", palavraOriginal," não é um palíndromo!");

}