var entrada = prompt("Insira o lado do tabuleiro de xadrez");
for (i=0; i<entrada; i++){
    var saida = "";
    if (i%2 == 0) {
        for (j=0; j<entrada; j++){
            if (j%2 == 0)saida = saida.concat(" ");
            else saida = saida.concat("#");
        }
    }
    else {
        for (j=0; j<entrada; j++){
            if (j%2 == 0)saida = saida.concat(" ");
            else saida = saida.concat("#");
        }
    }
    console.log(saida);
}