var palavra = prompt("Digite uma palavra e checaremos se é um palíndromo:");
var ePalindromo = 0;
for(var i=0; i < palavra.length; i++){
	if(palavra[i] == palavra[(palavra.length)-i]){
		ePalindromo=true;
	}
	else{
		console.log(palavra + " não é um palíndromo.");
		break;
	}
}
if(ePalindromo==true){
	console.log(palavra + " é um palíndromo.");
}