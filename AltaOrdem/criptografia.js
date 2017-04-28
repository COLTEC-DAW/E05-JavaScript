function criptografia(string, criterio) {
	var criptografado = "";
	var chave = (string.charCodeAt(0) % 26) + 1;

	for(var i = 0; i < string.length; i++) {
		criptografado += String.fromCharCode(criterio(string.charCodeAt(i), chave));
	}

	return criptografado;
}

function cifraCesar(char, chave) {
	if(char == 32) return char;

	char += chave;
	return (char >= 65 && char <= 90 || char >= 97 && char <= 122) ? char : char - 26;
}

console.log(criptografia("hello world", cifraCesar));