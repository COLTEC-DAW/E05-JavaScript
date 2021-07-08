function triangulo(linhasT){
    for(var i = 1; i <= linhasT; i++){
        for(var j = 1; j <= i; j++){
            hashtag += "#";
        }
        console.log(hashtag);
        hashtag = "";
    }
}

var hashtag = "";
var linhasT = prompt('Digite o numero de linhas do triangulo: ');

triangulo(linhasT);