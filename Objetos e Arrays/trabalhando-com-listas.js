function toList(array){
	var list = {};
	var listPosition = list;
	for(var i=0;i<array.length;i++){
		listPosition.value = array[i];
		listPosition.rest = {};
		listPosition = listPosition.rest;
	}
	return list;
}

//	Comandos de teste da função
	var novo = toList([1,2,3]);
	console.log(novo.value);
	console.log(novo.rest.value);
	console.log(novo.rest.rest.value);