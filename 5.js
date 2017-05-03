function contachars(frase,a) {
	var numero = 0;
	for(i = 0 ; i < frase.length-1; i++ ){
		if(frase[i]==a){
			numero++;
		}
	}
	return numero;
}

var frase = prompt("Digite a frase");
var letra = prompt("Digite a letra");
var num = contachars(frase,letra);

console.log(num);