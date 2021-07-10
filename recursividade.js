function mod(numero, mod){
    if(numero % mod == 0){
        return true;
    }

    else{
        return false;
    }
}

function mod2(numero) {
    return mod(numero, 2);
}

var numero = prompt("Digite um numero: ");
var mod = prompt("Digite um numero ");
resp = mod(numero, mod);