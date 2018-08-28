function palindromo(palavra){
	var j = palavra.length - 1;
	var reverso = palavra.split('').reverse().join('');
	if(palavra==reverso){
		console.log("Palíndromo");
	} else {
		console.log("Não Palíndromo");
	}
}
