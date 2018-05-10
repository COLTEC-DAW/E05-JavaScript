function range(min, max) {
    var array = []
    for (var i = min+1; i < max; i++) {
        array.push(i)
    }
    return array
}

var min = parseInt(prompt("Digite o seu numero minimo"))
var max = parseInt(prompt("Digite o seu numero maximo"))

let arr =range(min, max)
console.log(arr)


// segunda bolinha


function range(min, max, intervalo) {
    var array = []
    for (var i = min+1; i < max; i+=intervalo) {
        array.push(i)
    }
    return array
}

var min = parseInt(prompt("Digite o seu numero minimo"))
var max = parseInt(prompt("Digite o seu numero maximo"))
var intervalo = parseInt(prompt("Digite o seu intervalo"))

let arra =range(min, max, intervalo)
console.log(arra)
