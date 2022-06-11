function desenhaTriangulo() {
    let numLinhas = parseInt(document.getElementById("input_triangulo").value) + 1;
    for (let i = 0; i < numLinhas; i++) {
        let desenhoTriangulo = "";
        for (let j = 0; j < i; j++) {
            desenhoTriangulo += "#";
        }
        console.log(desenhoTriangulo);
    }
}