function crescente(a,b){ 
    return(a > b); 
}

function decrescente(a,b){ 
    return(a < b); 
}

function crescente_impar(a,b){ 
    return((a > b) && (a%2 != 0)); 
}

function decrescente_par(a,b){ 
    return((a > b) && (a%2 == 0)); 
}

function ordenar(array, modo){
    var tamanho = array.length;
    for (var i = 0; i < tamanho; i++) {
		for (var j = 0; j < tamanho; j++) {
			if (modo(array[j],array[j + 1])) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
    console.log(array);
}


function _100(array){
    for(var i = 100;i>=0;i--){
        array.push(i);
    }
    return array;
}

var array = [];
array = _100(array);




