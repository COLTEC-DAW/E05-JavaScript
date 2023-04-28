// Desisti da recursão

function intAleatorio() {
    return Math.floor(Math.random() * 100);
}

function arrayAleatorio (tamanho, array = [], i = 0) {
    if (i < tamanho) {
        array.push(intAleatorio());
        return arrayAleatorio(tamanho, array, i + 1);
    }
    else return array;
}

function bubbleSort(array) {
    for (let i=0; i < array.length; i++) {
        for (let j=0; j < array.length; j++) {
            if (array[j] > array[j+1]) {
                let buffer = array[j+1];

                array[j+1] = array[j];
                array[j] = buffer;
            }
        }
    }

    return array;
}

let novoArray = arrayAleatorio(20);

console.log("Array = " + novoArray);
console.log("Array ordenado = " + bubbleSort(novoArray));