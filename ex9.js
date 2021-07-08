// Usando funções built-in de arrays
function reverseArray(array) {
    return array.slice().reverse();
}

// Usando um loop
// function reverseArray(array) {
//     var novoVetor = [];
//     for (var i = (array.length - 1); i >= 0; i--) {
//         novoVetor.push(array[i]);
//     }
//     return novoVetor;
// }

var vetor = [2, 4, 6, 8, 10];
console.log(vetor);
console.log(reverseArray(vetor));
console.log(vetor);