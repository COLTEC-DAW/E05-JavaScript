var a = prompt();

if(a === a.split('').reverse().join('')){ //Split tranforma em array, reverse faz a ultima virar a primeira e consequentemente, join faz deixar de ser array
	console.log("É palindromo");
}
else{
	console.log("Não é Palindromo")
}
