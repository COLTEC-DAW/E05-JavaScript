function range(min, max,i){
	var array = [];
	for(var j=min;j<=max;j+=i){
		array.push(j);
	}
	return array;
}

// Comandos de Teste da Função

console.log(range(0,10,2));