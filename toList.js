function toList(array){
	return auxiliarList(array.reverse());
}

function auxiliarList(array){
	if(array.length < 1) return null;
	else {
		var novo = {
			value: array.pop(),
			rest: auxiliarList(array)
		}
		return novo;
	}
}
var array = [1,2,3,4,5,6,7,8,9,0];

console.log(toList(array));

/*
function toList(array){
	for(var i = 0; i < array.length; i++){
		if(array.length < 1) return null;
		else{
			var man = {
				value : array.pop(),
				rest : array.reverse()
			};
		}
	}
	return man.reverse();
}

var array = [1,2,3,4,5,6,9,51,24];
console.log(toList(array));
*/