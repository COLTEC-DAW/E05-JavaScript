function desenhaTriangulo(){
	var linhas = prompt("numero de linhas:");
	var triangulo = "Linhas: " + linhas + "\n";
	linhas++;
	for(var i = 1;i<(linhas);i++){
		for(var j=0;j<(i+1);j++){
			triangulo+="#";
		}
		triangulo += "\n";
	}
	console.log(triangulo);
}

// Comandos de Teste da Função

desenhaTriangulo();