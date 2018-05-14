//como utilizar recursidade nesse exercício?

var Numero = 2;
var Mod = 3;

function mod2(number){
    if ((number % 2) == 0){
        return true;
    }
    return false;
}

function mod(num, mod){
    if ((num % mod) == 0){
        return true;
    }
    return false;
}

console.log(mod2(Numero));
console.log(mod(Numero, Mod));