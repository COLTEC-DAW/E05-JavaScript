var n = prompt("Digite a quantidade de linhas");

for(var i=0; i<n; i++){

	if(i%2==0){
		for(var j=0; j < 8; j++){

			if(j%2==0){
				document.write("#");
			}
			else{
				document.write("&nbsp");
			}
		}
	}

	else{
		for(var j=0; j < 8; j++){
			if(j%2==0){
				document.write("&nbsp");
			}
			else{
				document.write("#");
			}
		}
	}
	document.write("<br>");
}