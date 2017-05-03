function cifraDeCesar(string, i){
	return String.fromCharCode(string.charCodeAt(i)-1);
}

function decrypt(string, criterio){
	string = string.split("");
	for(var i = 0; i < string.length; i++){
		if(string.charAt(i) != " "){
			string[i] = cifraDeCesar(string, i);
		}
	}
	return string.join("");
}


console.log(encrypt("Batalha naval eh muito louca", cifraDeCesar));