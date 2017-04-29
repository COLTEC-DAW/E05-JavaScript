function cifraCesar(caractere, deslocamento){
	return String.fromCharCode(caractere.charCodeAt()+deslocamento);
}

function criptografia(string,metodo,deslocamento){
	var criptografado = "";
	for(var i=0;i<string.length;i++){
		criptografado = criptografado.concat(metodo(string[i],deslocamento));
	}

	return criptografado;
}

// Comandos de teste da função
var crip = "ABCDE";
console.log(criptografia(crip,cifraCesar,10));