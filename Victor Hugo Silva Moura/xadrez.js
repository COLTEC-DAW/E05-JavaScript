var linhas = prompt("Digite o número de linhas");
var string = '';
for (var i = 0; i < linhas; i++) {
	if(i%2 != 0){
		string += " ";
	}
	string += "# # # #\n";
}
alert(string);