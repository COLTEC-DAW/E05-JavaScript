var minimo = Number.parseInt(prompt('Digite o numero minimo: '))
var maximo = Number.parseInt(prompt('Digite o numero maximo: '))
var interv = Number.parseInt(prompt('Digite um intervalo: '))

function range(max, min, intervalo) {
    var numbers = new Array()

    for (let i = (min+1); i < max; i+= intervalo) {
        numbers.push(i)
    }
    return numbers
}

console.log(range(maximo, minimo, interv))