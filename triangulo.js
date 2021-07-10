var i, j;
var hashtag = "";
var numero = prompt("Digite o numero de linhas do triangulo: ");

for(i = 1; i <= numero; i++){
    for(j = 1; j <= i; j++){
        hashtag += "#";
    }
    console.log(hashtag);
    hashtag = "";
}

