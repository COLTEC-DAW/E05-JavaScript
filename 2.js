var asterisco = "#";
var numero = prompt("Digite o número");

for(i = 0; i < numero; i++) {
	for(j = 0; j < 8; j++){
		if(i%2==1){
		console.log(" " + asterisco);
		}
		else{
			console.log(asterisco + " ");
        	}
	}
	console.log("\n");
}