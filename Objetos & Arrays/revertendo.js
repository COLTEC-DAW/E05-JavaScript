var meuArray = ["Laranja", 2, 3, "Acerola", 5];

function reverseArray(array) {
    var arrayReverso = [];

    for (let i = array.length-1; i >= 0; i--) {
        arrayReverso.push(array[i]);
    }

    return arrayReverso;
}

console.log(reverseArray(meuArray));