function criaMatriz(lin, col, func){
    var matriz = [];
    var pos = 0;
    
    for(var i=0;i<lin;i++){
        for(var j=0;j<col;j++){
            matriz[pos] = {
                linha: i,
                coluna: j,
                valor: func(i, j)
            }
            imprimeMatriz(matriz[pos]);
            pos++;
        }
    }
    return matriz;
}

function criterio1(i,j){
    return i+j;
}

function criterio2(i,j){
    return i*j;
}

function criterio3(i,j){
    return i == j ? 1 : 0;
}

function criterio4(i,j){
    return i^2/(j+1);
}

function criterio5(i,j){
    return i > j ? 1 : (i < j ? 5 : 0);
}

function imprimeMatriz(mat){
    console.log("[" + mat.linha + "," + mat.coluna + "] = " + mat.valor)
}

var mat = criaMatriz(5,5,criterio1);
var mat2 = criaMatriz(5,5,criterio2);
var mat3 = criaMatriz(5,5,criterio3);
var mat4 = criaMatriz(5,5,criterio4);
var mat5 = criaMatriz(5,5,criterio5);