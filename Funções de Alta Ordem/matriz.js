var matrizGenerator = function(criterio){
    var matriz = [];
    var tamanho = 3; //matriz quadrada
    for (let i = 0; i < tamanho; i++) {
        matriz[i] = [];
        for (let j = 0; j < tamanho; j++) {
            matriz[i][j] = criterio(i, j);
        }
    }
    return matriz;
}

var criterio1 = function (i, j) {
    return (i + j);
}

var criterio2 = function (i, j) {
    return (i * j);
}

var criterio3 = function (i, j) {
    return (i == j ? 1 : 0);
}

var criterio4 = function (i, j) {
    return ((i^2)/(j+1));
}

var criterio5 = function (i, j) {
    return (i > j ? 1 : (i < j ? 5 : 0));
}

console.log("\n" + matrizGenerator(criterio1));
console.log("\n" + matrizGenerator(criterio2));
console.log("\n" + matrizGenerator(criterio3));
console.log("\n" + matrizGenerator(criterio4));
console.log("\n" + matrizGenerator(criterio5));