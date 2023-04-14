// Imprime um meio triangulo de #
function triangulo() {
    let nLinhas = prompt("Digite o numero de linhas: ");
    let char = "#";

    for(i = 1; i <= nLinhas; i++) {
        console.log(char);
        char = char + "#";
    }
}

triangulo();