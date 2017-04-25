function countChars(frase, c){
    var qt = 0;
    for(var i=0; i<frase.length; i++){
        if(frase[i]==c){
            qt++;
        }
    }
    return qt;
}

var string = prompt("Frase");
var carac = prompt("Letra");
document.write(countChars(string, carac) +"vezes.");