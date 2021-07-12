var cont = function(frase, c){
    return((frase.match(new RegExp(c, "g")) || []).length);
}

var word = prompt("(Contagem) Digite uma palavra:");
var char = prompt("(Contagem) Digite um caractere:");

document.write(cont(word, char)+ " vezes.<br>");