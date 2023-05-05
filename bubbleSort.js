const array = [7, 2, 4, 1, 6, 1, 5, 8];

function bubbleSort(array, func){
    for(let i = 0; i < array.length-1; i++){
        for(let j = 0; j < array.length-1; j++){
            if(func(array[j], array[j+1]) > 0){
                [array[j], array[j+1]] = [array[j+1], array[j]];
            }
        }
    }
    return array;
}

function crescente(a, b){
    return a - b;
}

function decrescente(a, b){
    return b - a;
}

function crescImpar(a, b){
    if((a % 2 === 1) && (b % 2 === 0)){
        return -1;
    } else if((a % 2 === 0) && (b % 2 === 1)){
        return 1;
    } else {
        return a - b;
    }
}

function decrescPar(a, b){
    if ((a % 2 === 0) && (b % 2 === 1)) {
        return -1;
    } else if ((a % 2 === 1) && (b % 2 === 0)) {
        return 1;
    } else {
        return b - a;
    }
}

console.log(bubbleSort(array, crescente));
console.log(bubbleSort(array, decrescente));
console.log(bubbleSort(array, crescImpar));
console.log(bubbleSort(array, decrescPar));
