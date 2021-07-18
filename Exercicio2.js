var linhas = prompt('Digite o numero de linhas do seu tabuleiro de xadrez: ');

for (var i = 0; i < linhas; i++) {
    if (i % 2 == 0) {
        console.log("# # # #");
    } else {
        console.log(" # # # #");
    }
}