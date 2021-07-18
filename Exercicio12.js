function ordena(array, funcao) {
    for (var i = 0; i < array.length; i++) {

        for (var j = 0; j < array.length; j++) {

            if (funcao(array[j], array[j + 1])) {

                var aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }
}

function ordenaCrescente(num, numSeguinte) {
    return (num > numSeguinte);
}

var array = [3, 6, 12, 4, 9, 15];

console.log(array);

ordena(array, ordenaCrescente);

console.log(array);