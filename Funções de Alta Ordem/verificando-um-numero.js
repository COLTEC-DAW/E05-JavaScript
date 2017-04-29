function n_impar(n){
	return n%2!=0 ? true : false;
}
function n_primo(n){
	for(var i=2;i<(n/2);i++){
		if(n%i==0)
			return false;
	}
	return true;
}

function verificaNumero(n,metodo){
	return metodo(n) ? true : false;
}

// Comandos de teste da função
var n = 81;
console.log(verificaNumero(n,n_impar));
console.log(verificaNumero(n,n_primo));