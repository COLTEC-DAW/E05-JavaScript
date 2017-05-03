var palavra = prompt("Digite a palavra");
var real = true;

for(i = 0, j = palavra.length; i < palavra.length && j > 0; i++,j--) {
	if(palavra[i]!=palavra[j-1]){
		real = false;
		console.log("não é palíndromo.");
	}
	if(real == false){ break; }
}

if(real == true){ console.log("é palíndromo."); }