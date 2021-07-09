function numberCheck(num, verify){
    num = parseInt(num);
    if(typeof num == "number"){
        return verify(num);
    }
    else{
        console.log("Nao eh um numero!")
    }
}

function par(num){
    if (num % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

function impar(num){
    if (num % 2 !== 0){
        return true;
    }
    else{
        return false;
    }
}

function primo(num){
    var aux = 0;
    for(var i = 1; i < num; i++){
        if(num % i == 0){
            aux++;
        }
    }
    if(aux === 1){
        return true;
    }
    else{
        return false;
    }
}

console.log(numberCheck(7, primo));
