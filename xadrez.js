// Função que imprime a quantidade pedida do xadrez
function xadrez() {
    let nLinhas = prompt("Digite o numero de linhas: ");

    // Imprime com o padrão de xadrez
    for(i = 1; i <= nLinhas; i++) {
        let linhaAtual;

        if(i % 2 == 0) {
            linhaAtual = " # # # #";
        } else {
            linhaAtual = "# # # # ";
        }
        console.log(linhaAtual);
    }
}

xadrez();