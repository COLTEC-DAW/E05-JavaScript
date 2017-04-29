function vogaisUp(letra){
	return (letra=='a' || letra=='e' || letra=='i' || letra=='o' || letra=='u')? letra.toUpperCase() : letra;
}
function consoantesUp(letra){
	return (!(letra=='a' || letra=='e' || letra=='i' || letra=='o' || letra=='u' || letra=='A' || letra=='E' || letra=='I' || letra=='O' || letra=='U'))? letra.toUpperCase() : letra;
}
function vogaisDown(letra){
	return (letra=='A' || letra=='E' || letra=='I' || letra=='O' || letra=='U')? letra.toLowerCase() : letra;
}
function consoantesDown(letra){
	return (!(letra=='A' || letra=='E' || letra=='I' || letra=='O' || letra=='U'))? letra.toLowerCase() : letra;
}


function transformaChars(string,metodo){
	var newString="";
	for(var i=0; i<string.length;i++){
		newString = newString.concat(metodo(string[i]));
	}
	return newString;
}

// Comandos de teste da função
var frase = "minha frase";
console.log(transformaChars(frase,vogaisUp));
console.log(transformaChars(frase,consoantesUp));
var outra = "OUTRA FRASE";
console.log(transformaChars(outra,vogaisDown));
console.log(transformaChars(outra,consoantesDown));