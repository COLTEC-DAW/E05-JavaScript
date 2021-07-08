function countChars(frase, c){
    var aux = 0;
    for(i = 0; i < frase.length; i++){
        if(frase[i] === c){
            aux++
        }
    }
    return aux;
}

var frase = prompt("Digite a frase a ser usada: ");
var c = prompt("Digite o caracter a ser comparado: ");

var charsContados = countChars(frase, c);

console.log(charsContados);
