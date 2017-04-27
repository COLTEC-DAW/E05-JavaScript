var entrada = prompt("Insira a altura da pirâmide");
for (var i = 1; i <= entrada; i++){
    var saida = "";
    for (var j=0; j<i; j++) {
        saida = saida.concat("#");
        ("i=" + i);
        ("j=" + j);
    }
    console.log(saida);
}