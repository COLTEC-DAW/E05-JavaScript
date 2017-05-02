function toList(array){
	var anterior = null;

	/*preenchimento da lista feito de trás pra frente*/
	for(var i = array.length - 1; i >= 0; i--){
		var novo = {};
		novo.value = array[i];
		novo.rest = anterior;
		anterior = novo;
	}
	return anterior;
}