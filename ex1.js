function xadrez (x){
	var aux = "";
	var linha = 1;
	for (var i = 1; i <= x; i++) {
		aux += "\n";
		for(j=1; j <= linha; j++){
			aux += "#";
		}
		linha++;
	}
	console.log(aux);
}
