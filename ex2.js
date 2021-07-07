var nLinhas = prompt("Digite o número de linhas do tabuleiro de xadrez: ");

var tabuleiro = "# # # #";

for (var i = 0; i < nLinhas; i++) {
    if (i % 2 != 0) {
        console.log(" " + tabuleiro + "\n");
    } else {
        console.log(tabuleiro + "\n");
    }
}
