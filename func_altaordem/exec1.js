var array = [453,1231,486,12,52,48,96,5];

function crescente(array,i){
	return (array[i] > array[i+1]) ? true : false ;
}

function decrescente(array,i){
	return (array[i] < array[i+1]) ? true : false;
}

function crescenteImpar(array,i){
    return (array[i] > array[i+1] && array[i]%2!=0)? true : false;
}

function decrescenteImpar(array,i){
    return (array[i] < array[i+1] && array[i]%2!=0)? true : false;
}


          function bubbleSort(vetor,cond){
                for (var i=1;i<vetor.length; i++) {
                    for(var j=0;j<vetor.length-1;j++){
                        if (cond(vetor,j)) {    
                            var temp = vetor[j];
                            vetor[j] = vetor[j+1];
                            vetor[j+1] = temp;
                        }
                    }
                }
                return vetor;
            }


var array = bubbleSort(array, crescente);

document.write(bubbleSort(array,crescente) +"<br>");
document.write(bubbleSort(array,decrescente)+"<br>");
document.write(bubbleSort(array,crescenteImpar)+"<br>");
document.write(bubbleSort(array,decrescenteImpar)+"<br>");