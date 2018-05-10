function aux(NumDeLinhas){
	var j = 0;
	var aux = "";
	for(var i = 1; i<=NumDeLinhas; i++){
		if(j==0){
			aux+="# # # #\n";
			j++;
		} else{
			aux+=" # # # #\n";
			j--
		}
	}
	console.log(aux);
}
