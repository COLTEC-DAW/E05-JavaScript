var palavra = prompt("Digite uma frase sem caracteres especiais e checaremos se é um palíndromo:");
var ePalindromo = true;

for(var i = 0; i < palavra.length; i++){
	if(palavra.charAt(i).toLowerCase() != palavra.charAt(palavra.length - (i+1)).toLowerCase()){
		ePalindromo = false;
		console.log(palavra + " não é um palíndromo.");
		break;
	}
}

if(ePalindromo == true){
	console.log(palavra + " é um palíndromo.");
}