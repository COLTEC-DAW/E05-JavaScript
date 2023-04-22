var tam = prompt("Digite o tamanho do seu xadrez - ");
var xadrez = "";

for (i = 0; i < tam; i++) {
    for (j = 0; j < 8; j++) {
        if ((i + j) % 2 == 0) {
            xadrez += "#";
        } else {
            xadrez += " ";
        }
    }
    xadrez += "\n";
}

console.log(xadrez);