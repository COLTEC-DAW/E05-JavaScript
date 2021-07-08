function mod(number, mod){
    if(number % mod === 0){
        return true;
    }
    else{
        return false;
    }
}

function mod2(number){
    return mod(number, 2);
}

var number = prompt("Digite um numero: ");
var modV = prompt("Digite o numero a ser divisivel por: ");

resp = mod(number, modV);

if(resp === true){
    console.log("Numero divisivel por: " + modV);
}

else if(resp === false){
    console.log("Numero nao divisel por: " + modV);
}

else{
    console.log("Erro!");
}

resp2 = mod2(number);

if(resp2 === true){
    console.log("Numero divisivel por 2!!");
}

else if(resp2 === false){
    console.log("Numero nao divisel por 2!!");
}

else{
    console.log("Erro!");
}