function ePrimo(num){
	var divisivelPor = [];
	for(var i = num; i > 0; i--){
		if(num%i == 0){
			divisivelPor.push(i);
		}
	}
	if(divisivelPor.length <= 2) return true;
	else return false;
}

function eImpar(num){
	return (num%2 == 1);
}

function verify(num, func){
	if(func(num)) console.log("True!");
	else console.log("False!");
}

console.log(verify(13, ePrimo));
console.log(verify(18, ePrimo));
console.log(verify(13, eImpar));
console.log(verify(18, eImpar));