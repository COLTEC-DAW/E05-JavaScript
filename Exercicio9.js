var array = [10, 20, 30];
console.log(array)

var arrayReverso = reverseArray(array);

function reverseArray(array) {
    var novoArray = [];
    for (i = 0; i < array.length; i++) {
        novoArray[i] = array[i];
    }
    return novoArray.reverse();
}

console.log(arrayReverso);