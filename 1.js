var asterisco = "#";
var numero = prompt("Digite o número");

for(i = 0; i < numero; i++) {
	for(j = 0; j < i+1; j++){
		console.log(asterisco);
    }
	console.log("\n");
}