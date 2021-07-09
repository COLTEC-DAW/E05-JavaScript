function ordena(array, modoOrd){
    for(var i = 0; i < array.length; i++){

        for(var j = 0; j < array.length; j++){

            if(modoOrd(array[j], array[j + 1])){

                var aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }
}

function crescente(num, numSeguinte){
    return (num > numSeguinte);
}

function decrescente(num, numSeguinte){
    return (num < numSeguinte);
}

function crescenteImpar(num, numSeguinte){
    return ((num > numSeguinte) && (num%2 !== 0));
}

function decrescentePar(num, numSeguinte){
    return ((num < numSeguinte) && (num%2 === 0));
}

var array = [9, 8, 7, 6, 5, 13, 24, 65, 89, 0, 45, 76, 342, 1, 4, 10];

console.log("Antes: " + array);

ordena(array, decrescentePar);

console.log("Depois: " + array);