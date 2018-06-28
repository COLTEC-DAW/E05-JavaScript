function bubbleSort(arr, imPar, crescente) {
    var array = []
    for(var i = 0; i < arr.length; i++) {
        if( (imPar == "par" && arr[i]%2 == 0) || (imPar == "impar" && arr[i]%2 != 0) || imPar == null) {
            array.push({
                valor: arr[i],
                index: i
            })
        }        
    }
    do {
        trocado = false
        for (var i = 0; i < array.length-1; i++) {
            if ( (array[i].valor > array[i+1].valor) && crescente || (array[i].valor < array[i+1].valor) && !crescente) {
                temp = array[i].valor
                array[i].valor = array[i+1].valor
                array[i+1].valor = temp
                trocado = true
            }
        }
    } while(trocado);
    array.forEach(num => {
        arr.splice(num.index, 1, num.valor)
    })
    return arr
}

array = [3,5,8,1,4,2,9,6]
console.log(bubbleSort(array, null, true))