function range(min, max) {
    if (min > max) {
        var aux = min;
        min = max;
        max = aux;
    }

    var array = [];

    for (var i = min + 1; i < max; i++) {
        array.push(i);
    }
    return array;
}

function rangeVariacao(min, max, i) {
    if (min > max) {
        var aux = min;
        min = max;
        max = aux;
    }

    var array = [];

    for (var j = min + 1; j < max; j += i) {
        array.push(j)
    }

    return array;
}

//var valorMin = prompt("Digite o maior numero do seu array: ")
//var valorMax = prompt("Digite o menor numero  do seu array: ")
var array = range(12, 2);

//prompt("Os numeros impressos com um intervalo de 2")
var arrayVariacao = rangeVariacao(2, 10, 2);

console.log(array);
console.log(arrayVariacao);