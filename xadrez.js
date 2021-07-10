var i, j;
var tabuleiro = " # # # #";
var numero = prompt("Digite o numero de linhas do tabuleiro: ")

for(i = 0; i <= numero; i++){
    if(i % 2 != 0){
        console.log(" " + tabuleiro);
    }
    else{
        console.log(tabuleiro);
    }
}