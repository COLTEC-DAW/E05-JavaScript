
function max(a, b){

    if (a >= b){
        return a;
    }
    return b;
}

function min(a, b){

    if (a <= b){
        return a;
    }
    return b;
}



function modulo (num, mod){
    
    if (num-mod == 0){
        return true;
    }
    else if (num-mod < 0){
        return false;
    }

    return modulo((num-mod), mod);
}

console.log(modulo(58, 3));


function countChars (frase, c){

    var count = 0;
    var letras = frase.split('');

    for (var i in letras) {
        if (letras[i] == c){
            count++;
        }
    }
    return count;
}

console.log(countChars('Que lidíssimo dia', 'i'));
