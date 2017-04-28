var numeroLinhas;
var string = "";

numeroLinhas = prompt("Insira o numero de linhas:");
for(var i = 0; i < numeroLinhas; i++) {
	for(var j = 0; j < 8; j++) {
		if(i % 2 == 0) {
			if(j % 2 == 0) {
				string += "#";
			}
			else {
				string += " ";
			}
		}
		else {
			if(j % 2 == 0) {
				string += " ";
			}
			else {
				string += "#";
			}	
		}
	}
	console.log(string);
	string = "";
}