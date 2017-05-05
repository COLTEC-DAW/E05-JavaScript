function bubble(array, func) {

	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < (array.length - i - 1); j++) {
			if(func(array[j], array[j + 1])) {
				var temp = array[j];
				array[j] = array[j+1];
				array[j+1] = temp;
			}
		}
	}

	return array;
}

function crescente(v1, v2) {
	return v1 > v2;
}

function decrescente(v1, v2) {
	return v1 < v2;
}

function crescenteImpar(v1, v2) {
	if((v1 % 2 != 0 && v2 % 2 != 0) || (v1 % 2 == 0 && v2 % 2 == 0)) {
		return v1 > v2;
	}
	else {
		if(v1 % 2 != 0) {
			return false;
		}
		else if(v2 % 2 != 0) {
			return true;
		}
	}
}

function decrescentePar(v1, v2) {
	if((v1 % 2 != 0 && v2 % 2 != 0) || (v1 % 2 == 0 && v2 % 2 == 0)) {
		return v1 < v2;
	}
	else {
		if(v1 % 2 == 0) {
			return false;
		}
		else if(v2 % 2 == 0) {
			return true;
		}
	}
}

var array = [1,2,3,4,5,6,7,8,9,10,11,121];

console.log(bubble(array, crescente));
console.log(bubble(array, decrescente));
console.log(bubble(array, crescenteImpar));
console.log(bubble(array, decrescentePar));