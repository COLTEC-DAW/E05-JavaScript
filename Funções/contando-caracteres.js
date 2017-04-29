function countChars(frase,c){
	var n=0;
	for(var i=0;i<frase.length;i++){
		if(frase[i] == c)
			n++;
	}
	return n;
}

// Comandos de Teste da Função

console.log(countChars("oi oi oi",'o'));