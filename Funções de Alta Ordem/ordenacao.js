function crescente(array,i){
	return (array[i] > array[i+1]) ? true : false ;
}
function decrescente(array,i){
	return (array[i] < array[i+1]) ? true : false;
}
function crescente_impar(array,i){
	return (array[i] > array[i+1] && array[i]%2!=0)? true : false;
}
function decrescente_par(array,i){
	return (array[i] < array[i+1] && array[i]%2==0)? true : false;
}

function ordenacao(array,criterio){
    for (var i=1;i<array.length;i++) {
    	for(var j=0;j<(array.length-1);j++){
	    	// faz a troca caso o criterio seja == true
	        if (criterio(array,j)) {
	            var t = array[j];
	            array[j] = array[j+1];
	            array[j+1] = t;
	        }
	    }
    }
    return array;
}

// Comandos de teste da função
	var array = [9,8,7,6,5,4,3,2,1];
	array = ordenacao(array,crescente_impar);
	console.log(array);

	array = [1,2,3,4,5,6,7,8,9];
	array = ordenacao(array,decrescente_par);
	console.log(array);

	var array = [9,8,7,6,5,4,3,2,1];
	array = ordenacao(array,crescente);
	console.log(array);

	array = [1,2,3,4,5,6,7,8,9];
	array = ordenacao(array,decrescente);
	console.log(array);