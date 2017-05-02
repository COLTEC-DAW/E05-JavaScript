var linhas = prompt("Digite o número de linhas");
var string;
for (var i = 1; i <= linhas; i++) {
	string = '';
	for(var j = 0; j <= i; j++){
		string += "#";
	}
	console.log(string + "\n");
}