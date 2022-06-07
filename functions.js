function min(x, y){
    return x < y ? x : y;
}

function max(x, y){
    return x < y ? x : y;
}

function module(number, mod){
    if(number == 0) return true;
    if(number == 1) return false;
    return module(number - mod, mod);
}

function module2(number){
    return module(number, 2);
}

function countChars(string, char){
    let count = 0;
    for(let i = 0; i < string.length; i++){
        if(string.charAt(i) == char){
            count++;
        }
    }
    return count;
}
