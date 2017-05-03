function consoantesMinusculas(char){
	var consoantes = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','x','y','z'];
	var CONSOANTES = ['B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','X','Y','Z'];

	for(var i = 0; i < consoantes.length; i++){
		if(char[0] == CONSOANTES[i]) return consoantes[i];
	}
	return char;
}


function consoantesMaiusculas(char){
	var consoantes = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','x','y','z'];
	var CONSOANTES = ['B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','X','Y','Z'];

	for(var i = 0; i < consoantes.length; i++){
		if(char[0] == consoantes[i]) return CONSOANTES[i];
	}
	return char;
}

function vogaisMinusculas(char){
	var vogais = ['a','e','i','o','u'];
	var VOGAIS = ['A','E','I','O','U'];

	for(var i = 0; i < vogais.length; i++){
		if(char[0] == VOGAIS[i]) return vogais[i];
	}
	return char;
}

function vogaisMaiusculas(char){
	var vogais = ['a','e','i','o','u'];
	var VOGAIS = ['A','E','I','O','U'];

	for(var i = 0; i < vogais.length; i++){
		if(char[0] == vogais[i]) return VOGAIS[i];
	}
	return char;
}

function transform(string, method){
	string = string.split("");
	for(var i = 0; i < string.length; i++){
		string[i] = method(string[i]);
	}
	return string.join("");
}

console.log(transform("adoleta", vogaisMaiusculas));
console.log(transform("adoleta", vogaisMinusculas));
console.log(transform("adoleta", consoantesMaiusculas));
console.log(transform("adoleta", consoantesMinusculas));