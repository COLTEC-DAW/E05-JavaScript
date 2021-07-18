var hashtag = "";
var linhas = prompt('Digite o numero de linhas do triangulo: ');

for (var i = 1; i <= linhas; i++) {
    for (var j = 1; j <= i; j++) {
        hashtag += "#";
    }
    console.log(hashtag);
    hashtag = "";
}