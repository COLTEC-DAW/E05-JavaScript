function toList(array) {
    var list = null;
    // Percorre o array de trás pra frente e adiciona seus elementos na lista;
    for (var length = (array.length - 1); length >= 0; length--) {
        list = {
            value: array[length],
            rest: list
        }
    }
    return list;
}

var vetor = [10, 20, 30];
console.log(vetor);
console.log(toList(vetor));