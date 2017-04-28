function toList(array){
	var list = {
		value: ,
		rest: 
	}
	for(var i = 0; i < array.length; i++){
		man = new list;
		man.value = array[i];
		man.rest = man[i+1];
	}
	return man;
}