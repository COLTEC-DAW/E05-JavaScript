function mod2(number) {
    if (number < 1){ 
    return number==0 ? true:false

    }
    return mod2(number -2)
}

var number = prompt("Digite um numero")

console.log(mod2(number))

//bolinha dois

function modX(num, modY) {

    if (num < modY) {
        return num==0 ? true:false
    }
    return modX(num-modY, modY)    
}

var num = prompt("Digite um numero")
var modY = prompt("Digite seu divisor")

console.log(modX(num, modY))
