function verificaPalindromo(txt){
	var inverso = "";
	for(var i=txt.length-1;i>=0;i--){
		inverso = inverso.concat(txt[i]);
	}
	if(txt == inverso)
		return true;
	else
		return false;
}

//Comandos de Teste da Função

console.log(verificaPalindromo("subinoonibus"));
console.log(verificaPalindromo("ola"));