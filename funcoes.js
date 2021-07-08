//Mínimo e Máximo
function min(a, b){
    if(a < b){
        return a;
    }
    else if(b < a){
        return b;
    }
}

function max(a, b){
    if(a > b){
        return a;
    }
    else if(b > a){
        return b;
    }
}

//Recursividade
function mod2(num){
    return mod(num,2);
}

function mod(num, mod){
    if(num % mod == 0){
        return true;
    }
    else{
        return false;
    }
}

//Contando caracteres
function countChars(frase, c){
    var aux = 0;
    for(var i = 0; i < frase.length; i++){
        if(frase[i] == c){
            aux++;
        }
    }
    console.log("O caractere ", c, " apareceu ", aux, " vezes na frase");
}

