function range(min, max){
	var array = [];
	for(var i = min; i <= max; i++){
		array.push(i);
	}
	return array;
}

function range2(min, max, inter){
	var array = [];
	for(var i = min; i <= max; i += inter){
		array.push(i);
	}
	return array;
}