function reverseArray(array){
    var arrayInvertida = [] //"" para string
    var tam = array.length
    for (var i = tam-1; i >= 0; i--) {
     arrayInvertida.push(array[i])
    }
    return arrayInvertida
}

var array = prompt("Digite o Array:")

console.log(reverseArray(array))
