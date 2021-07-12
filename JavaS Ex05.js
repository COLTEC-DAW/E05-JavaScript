/* Atividade Do Triangulo */
var triangulo = function(NLinhas){
    for (var i = 1; i <= NLinhas; i++){
        var HashTag = "";
        for(var j = 1; j <= i; j++){
            HashTag += "#";
        }
        console.log(HashTag)
    }
}

var NLinhasT = prompt("Quantas Linhas deseja que o triangulo tenha? ");
triangulo(NLinhasT);