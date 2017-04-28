function maiorQue(a, b){
	return a > b;
}

function bubbleSort(array){
	for (var i = array.length; i > 0; i--) {
        for (var j = array.length - i; j > 0; j--) {
            if(maiorQue(array[j], array[j-1])){
                var h = array[j];
                array[j] = array[j-1];
                array[j-1] = h;
            }
        }
    }
    return array;
}