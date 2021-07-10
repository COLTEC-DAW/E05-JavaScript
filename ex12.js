// Bubble sort
function bubbleSort(array, criteria) {
    var check;
    do {
        check = false;
        for (var i = 0; i < array.length; i++) {
            if (criteria(array[i], array[i + 1])) {
                var tmp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = tmp;
                check = true;
            }
        }
    } while (check);
}

// Verifica se o valor é par
function isEven(value) {
    return (value % 2 == 0)
}

// Verifica se o valor é ímpar
function isOdd(value) {
    return (value % 2 != 0)
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

// Ordena em ordem crescente
function ascending(array) {
    bubbleSort(array, function (a, b) {
        return a > b;
    })
}

// Ordena em ordem decrescente
function descending(array) {
    bubbleSort(array, function (a, b) {
        return a < b;
    })
}

// Ordena os valores pares de forma decrescente
function sortEven(array) {
    var novo = array.filter(isEven);
    var tmp = array.filter(isOdd);
    descending(novo);
    return novo.concat(tmp);
}

// Ordena os valores ímpares de forma crescente
function sortOdd(array) {
    var novo = array.filter(isOdd);
    var tmp = array.filter(isEven);
    ascending(novo);
    return novo.concat(tmp);
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------

var vetor = [3, 1, 10, 5, 4, 7, 2, 21, 11, 14, 13];

ascending(vetor);
console.log(vetor);

vetor = [3, 1, 10, 5, 4, 7, 2, 21, 11, 14, 13];
descending(vetor);
console.log(vetor);

vetor = [3, 1, 10, 5, 4, 7, 2, 21, 11, 14, 13];
console.log(sortOdd(vetor));

vetor = [3, 1, 10, 5, 4, 7, 2, 21, 11, 14, 13];
console.log(sortEven(vetor));