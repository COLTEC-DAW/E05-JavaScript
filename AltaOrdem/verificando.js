function verifica(num, criterio) {
	return criterio(num);
}

function isImpar(num) {
	return num % 2 != 0;
}

function isPrimo(num) {
	for(var i = 2; i <= num / 2; i++) {
		if(num % i == 0) {
			return false;
		}
	}

	return true;
}

console.log(verifica(256, isImpar));
console.log(verifica(256, isPrimo));

console.log(verifica(13, isImpar));
console.log(verifica(13, isPrimo));