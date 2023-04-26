function intAleatorio() {
    return Math.floor(Math.random() * 100);
}

function arrayAleatorio (tamanho, array = [], i = 0) {
    if (i < tamanho) {
        array.push(intAleatorio());
        return arrayAleatorio(tamanho, array, i + 1);
    }
    else return array;
}

function executaFuncao (m, funcao) {

    for (let i = 0; i < m.length; i++) {

        for (let j = 0; j < m[i].length; j++) {
            m[i][j] = funcao(i, j);
        }

    }

    return m;
}

function imprimeMatriz (m) {
    for (let i = 0; i < m.length; i++) {
        console.log(m[i]);
    }
    console.log("======================\n");
}

function soma (i, j) {
    return i + j;
}

function multiplicacao (i, j) {
    return i * j;
}

function igualOuDiferente (i, j) {
    return i == j ? 1 : 0;
}

function potenciaEDivisao (i, j) {
    return i^2/(j+1);
}

function ternarioLongo (i, j) {
    return i > j ? 1 : (i < j ? 5 : 0);
}

let m = [arrayAleatorio(4), arrayAleatorio(4), arrayAleatorio(4), arrayAleatorio(4)];
let funcoes = [soma, multiplicacao, igualOuDiferente, potenciaEDivisao, ternarioLongo];

console.log("Matriz original:\n")
imprimeMatriz(m);

for (let i=0; i < funcoes.length; i++) {
    let novaMatriz = executaFuncao(m, funcoes[i]);
    console.log(funcoes[i].name + ":");
    imprimeMatriz(novaMatriz);
}