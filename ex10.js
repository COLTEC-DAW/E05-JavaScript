function toList(array){
	if(array.length == 0){
		return null;
	}
	var valor = array.shift();
	return {
		value: valor,
		rest: toList(array)
	};
}
