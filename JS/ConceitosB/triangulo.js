function triangulo() {
    let nLinhas = 5;
    for (i = 0; i < nLinhas; i++) {
        let linha = "";
        for (j = 0; j <= i; j++) {
            linha = linha + "#";
        }
        console.log(linha);
    }
}

triangulo();