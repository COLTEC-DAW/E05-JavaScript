function toList(array) {
    var list = {}
    var atual = list
    for (let i = 0; i < array.length; i++) {
        atual.value = array[i]
        atual.rest = {}
        atual = atual.rest
    }
    return list
}

var array = [1,2,3,4,5,6]
var obj = toList(array)
console.log(obj)