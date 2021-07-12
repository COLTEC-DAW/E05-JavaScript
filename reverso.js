var reverse = function(frase){
    var reverso = [];
    var j = 0;

    for(i = frase.length - 1; i >= 0; i--){
        reverso[j] = frase[i];
        j+=1;
    }

    return reverso;
}

var array = prompt("(Reverso) Digite uma frase:");
document.write(reverse(array) + " <- revertido<br>");