function arrayToList(array, i=0) {
    if (i < array.length) {
        return {
            value: array[i], 
            rest: arrayToList(array, i+1)
        }
    } else {
        return null
    }
}

array = [1, 3, 7, 9, 10]
list = arrayToList(array)

// Json.stringfy pois não estava printando o objeto completo
console.log(JSON.stringify(list))