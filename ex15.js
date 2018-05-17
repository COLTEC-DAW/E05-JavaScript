function transforma(action, array){
	array = array.split("")
	for(var i=0;i<array.length;i++){
		array[i] = action(array[i])
	}
	array = array.join("")
	return array;
}

function vogalUpper (letra){
		if(letra=="a"||letra=="e"||letra=="i"||letra=="o"||letra=="u"){
			letra = letra.toUpperCase();
		}
	return letra;
}
function consoanteUpper (letra){
		if(!(letra=="a"||letra=="e"||letra=="i"||letra=="o"||letra=="u")){
			letra = letra.toUpperCase();
		}
	return letra;
}
function vogalLower (letra){
		if(letra=="a"||letra=="e"||letra=="i"||letra=="o"||letra=="u"){
			letra = letra.toLowerCase();
		}
	return letra;
}
function consoanteLower (letra){
		if(!(letra=="a"||letra=="e"||letra=="i"||letra=="o"||letra=="u")){
			letra = letra.toLowerCase();
		}
	return letra;
}
