function achamaior(n1,n2) {
	var maior;
	if(n1>=n2){ maior = n1; }
	else {maior = n2; }
	return maior;
}

var varmenor = achamenor(n1,n2);
function achamenor(n1,n2) {
	var menor;
	if(n1<=n2){ menor = n1; }
	else {menor = n2; }
	return menor;
}
function mod2(num){
    return num%2==0;
}

function mod(num, mod){
        return num%mod==0;
}

var n1 = prompt("Digite o número 1");
var n2 = prompt("Digite o número 2");
var varmaior = achamaior(n1,n2);
var varmenor = achamenor(n1,n2);

console.log(varmaior);
console.log(varmenor);