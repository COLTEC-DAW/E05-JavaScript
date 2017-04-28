function bubbleSort(array, criterio) {
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < (array.length - i - 1); j++) {
			if(criterio(array[j], array[j + 1])) {
				var tmp = array[j];
				array[j] = array[j+1];
				array[j+1] = tmp;
			}
		}
	}

	return array;
}

function crescente(value1, value2) {
	return value1 > value2 ? true : false;
}

function decrescente(value1, value2) {
	return value1 < value2 ? true : false;
}

function crescenteImpar(value1, value2, condicao) {
	if((value1 % 2 != 0 && value2 % 2 != 0) || (value1 % 2 == 0 && value2 % 2 == 0)) {
		return value1 > value2 ? true : false;
	}
	else {
		if(value1 % 2 != 0) {
			return false;
		}
		else if(value2 % 2 != 0) {
			return true;
		}
	}
}

function decrescentePar(value1, value2, condicao) {
	if((value1 % 2 != 0 && value2 % 2 != 0) || (value1 % 2 == 0 && value2 % 2 == 0)) {
		return value1 < value2 ? true : false;
	}
	else {
		if(value1 % 2 == 0) {
			return false;
		}
		else if(value2 % 2 == 0) {
			return true;
		}
	}
}

console.log(bubbleSort([5,3,7,1,2,4], crescente));
console.log(bubbleSort([5,3,7,1,2,4], decrescente));
console.log(bubbleSort([5,3,7,1,2,4], crescenteImpar));
console.log(bubbleSort([5,3,7,1,2,4], decrescentePar));