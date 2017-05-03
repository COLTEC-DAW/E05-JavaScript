var array = [1,2,3,6,2,3,9];
function bubblesort(array, func) {

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
function normal(v1, v2) {
	return v1 > v2;
}
function contrario(v1, v2) {
	return v1 < v2;
}
function normalImpar(v1, v2) {
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
function contrarioPar(v1, v2) {
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
console.log(bubblesort(array, normal));

console.log(bubblesort(array, contrario));

console.log(bubblesort(array, normalImpar));

console.log(bubblesort(array, contrarioPar));