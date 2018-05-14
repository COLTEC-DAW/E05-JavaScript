// os pares vão ficar de um lado e os ímpares de outro, serão ordenados conforme o critério

var meuVetor = [1,4,3,2,9,7,1,6,8,10,1];

var Crescente = function (a, b){
    return (a > b);
}


var Decrescente = function (a, b){
    return (a < b);
}

var DecrescentePar = function (a, b){
    if (a%2==0 && b%2==1){
        return false;
    }
    else if (a%2==1 && b%2 == 0){
        return true;
    }
    else if(a%2==1 && b%2 == 1){
        return false;
    }
    else{
        return a<b;
    }
}

var CrescenteImpar = function (a, b){
    if (a%2==1 && b%2==0){
        return false;
    }
    else if (a%2==0 && b%2 == 1){
        return true;
    }
    else if(a%2==0 && b%2 == 0){
        return false;
    }
    else{
        return a>b;
    }
}

function BubbleSort(vetor, criterio){
	var aux;
	for(i = 0; i<vetor.length;i++){
		for(j = 0; j <= vetor.length; j++){
			if(criterio(vetor[j], vetor[j+1])){
				aux = vetor[j];
				vetor[j] = vetor[j+1];
				vetor[j+1] = aux;
            }   	
        }
        console.log(vetor);
	}
}
BubbleSort(meuVetor, CrescenteImpar);
console.log("\n\n");
BubbleSort(meuVetor, DecrescentePar);