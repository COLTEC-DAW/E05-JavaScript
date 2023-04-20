// Imprime um meio triangulo de #
function triangulo() {
    let nLinhas = prompt("Digite o numero de linhas: ");
    let char = "#";
    let linha = char;

    // Imprime a linha e adiciona um char a cada linha
    for(i = 1; i <= nLinhas; i++) {
        console.log(linha);
        linha = linha + char;
    }
}

triangulo();