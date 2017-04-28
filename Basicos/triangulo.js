var numeroLinhas;
var string = "";

numeroLinhas = prompt("Insira o numero de linhas:");
for (var i = 0; i < numeroLinhas; i++) {
	for(var j = 0; j <= i; j++) {
		string += "#";
	}
	console.log(string);
	string = "";
}