function multiplicaString(strOriginal, num, strAtual = "", i = 0) {
    if (i >= num) return strAtual;
    else return multiplicaString(strOriginal, num, strAtual+strOriginal, i+1);
}

function tabuleiro(i, altura, str) {
    if(i < altura) {
        if (i%2) console.log(" " + str);
        else console.log(str);

        tabuleiro(i+1, altura, str);
    }
}

let alturaTabuleiro = prompt("Altura do tabuleiro: ");
let larguraTabuleiro = prompt("Largura do tabuleiro: ");

let str = multiplicaString("# ", larguraTabuleiro);

tabuleiro(0, alturaTabuleiro, str);