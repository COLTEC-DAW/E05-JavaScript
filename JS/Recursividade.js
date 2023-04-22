var number = Number.parseFloat(prompt('Digite um numero: '))

function mod2(number) {

    var resultadoNum = number % 2;

    if (resultadoNum == 0) {
        return true
    }
    else if (resultadoNum != 0) {
        return false
    }
}

console.log(mod2(number))