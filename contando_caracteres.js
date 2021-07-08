function countChars(frase, c){
    frase.toLowerCase();
    var count = 0;
    for(var i = 0;i < frase.length;i++){
        if(frase[i] == c){
            count++;
        }
    }
    console.log(c, "Repetiu", count, "vezes");
}

var frase = "carrocc";
var c = 'c'
countChars(frase,c);