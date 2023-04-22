var nLinhas = prompt("Digite o tamanho o tabuleiro de xadrez: ");
var tabuleiro = "";

for(var i = 0; i < nLinhas; i++){
    if((i%2) == 0){
        for(var j = 0; j < nLinhas; j++){
            tabuleiro += "# ";
        }
    }
    if((i%2) == 1){
        for(var k = 0; k < nLinhas; k++){
            tabuleiro += " #";
        }
    }
    tabuleiro += "\n";
}
console.log(tabuleiro);