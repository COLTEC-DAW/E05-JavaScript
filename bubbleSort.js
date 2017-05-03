function decrescente(a, b){ return a > b; }
function crescente(a, b){ return a < b; }

/* COMO FAZ UMA FUNÇÃO QUE ORDENA OS IMPARES CRESCENTES?
function crescenteImpares(a, b){
    if(a%2 == 0 && b%2 == 0){
        return false;
    }
    else if(a%2 != 0 && b%2 != 0){
        return a < b;
    }
    else return (a < b);
}
*/

function bubbleSort(array, maiorQue){
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

var array =[9,1,3,8,5,0,6,4,7,2];
console.log(bubbleSort(array, decrescente));
console.log(bubbleSort(array, crescente));
console.log(bubbleSort(array, crescenteImpares));