function reverseArray(array) {
    var string = ""
    for(var i = array.length-1; i >= 0; i--) {
        string += array.charAt(i)
    }
    return string
}

array = 'minha mensagem de texto'
array = reverseArray(array)
console.log(array)