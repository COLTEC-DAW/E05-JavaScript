function desenhaTabuleiro(){
	var linhaTab = "";
	var linhas = prompt("numero de linhas:");
	for(var j=0;j<linhas;j++)
		linhaTab +="# ";

	var tabuleiro="\n";
	for(var i = 0;i<(linhas)*2;i++){
		if(i%2==0){
			tabuleiro+= linhaTab+ "\n";
		}
		else{
			tabuleiro+= " "+ linhaTab+ "\n";
		}
	}
	console.log(tabuleiro);
}

// Comandos de Teste da Função

desenhaTabuleiro();