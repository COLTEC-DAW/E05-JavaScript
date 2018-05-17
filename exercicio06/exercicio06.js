let number = 9
let divisor = 3

console.log(modx(number,divisor))

function mod2(number){
    if(number<1){
        return number==0 ? true:false
    }
    return mod2(number-2)
}

function modx(number, mod){
    if(number<1){
        return number==0 ? true:false
    }
    return modx(number-mod, mod)
}