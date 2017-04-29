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

function desenhaTabuleiro(){
	var linhaTab = "# # # #";
	var linhas = prompt("numero de linhas:");
	var tabuleiro="\n";
	for(var i = 0;i<(linhas);i++){
		if(i%2==0){
			tabuleiro+= linhaTab+ "\n";
		}
		else{
			tabuleiro+= " "+ linhaTab+ "\n";
		}
	}
	console.log(tabuleiro);
}

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

function diferente(){
	for(var i=1;i<101;i++){
		if(i%3==0 && i%5==0){
			console.log("FizzBuzz");
		}
		else if(i%3==0){
			console.log("Fizz");
		}
		else if(i%5==0){
			console.log("Buzz");
		}
		else{
			console.log(i):
		}
	}
}