function triangulo(str, i, tamanho) {
    if(i < tamanho) {
        console.log(str);
        triangulo(str+"#", i+1, tamanho);
    }
}

let tamanhoTriangulo = prompt("Tamanho do triângulo: ");
triangulo("##", 0, tamanhoTriangulo);