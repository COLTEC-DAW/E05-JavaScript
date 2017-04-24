var numLines = prompt("Digite o número de linhas: ");
var str = "";
for (var i = 0; i < numLines; i++) {
	for(var v = -1; v < i+1; v++){
		str += "#";
	}
	console.log(str);
	str="";
}