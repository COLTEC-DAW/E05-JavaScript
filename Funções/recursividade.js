function mod2(n){
	if(n%2==0)
		return true;
	else
		return false;
}

function mod(n,mod){
	if(n%mod==0)
		return true;
	else
		return false;
}

// Comandos de Teste da Função

console.log(mod2(8));
console.log(mod(21,3));