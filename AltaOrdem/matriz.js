function geraMatriz(tam, criterio) {
	var novaMatriz = [];

	for(var i = 0; i < tam; i++) {
		novaMatriz[i] = [];

		for(var j = 0; j < tam; j++) {
			novaMatriz[i][j] = (criterio(i, j));
		}
	}

	return novaMatriz;
}

function soma(i, j) {
	return i + j;
}

function multiplicacao(i, j) {
	return i * j;
}

function geratiz(i, j) {
	return i == j ? 1 : 0;
}

function criterio4(i, j) {
	return Math.pow(i, 2)/(j + 1);
}

function criterio5(i, j) {
	return i > j ? 1 : (i < j ? 5 : 0);
}

console.log(geraMatriz(10, soma));
console.log(geraMatriz(10, multiplicacao));
console.log(geraMatriz(10, geratiz));
console.log(geraMatriz(10, criterio4));
console.log(geraMatriz(10, criterio5));