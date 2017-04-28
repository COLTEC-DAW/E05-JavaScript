function transformacao(string, criterio) {
	var transformada = "";

	for(var i = 0; i < string.length; i++) {
		transformada += criterio(string.charAt(i));
	}

	return transformada;
}

function toUpperVogal(char) {
	return ['a','e','i','o','u'].indexOf(char.toLowerCase()) != -1 ? char.toUpperCase() : char;
}

function toUpperConsonant(char) {
	return ['a','e','i','o','u'].indexOf(char.toLowerCase()) == -1 ? char.toUpperCase() : char;
}

function toLowerVogal(char) {
	return ['a','e','i','o','u'].indexOf(char.toLowerCase()) != -1 ? char.toLowerCase() : char;
}

function toLowerConsonant(char) {
	return ['a','e','i','o','u'].indexOf(char.toLowerCase()) == -1 ? char.toLowerCase() : char;
}

console.log(transformacao("hello world", toUpperVogal));
console.log(transformacao("hello world", toUpperConsonant));
console.log(transformacao("HELLO WORLD", toLowerVogal));
console.log(transformacao("HELLO WORLD", toLowerConsonant));