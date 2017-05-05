function verificaNum(num, func){
    return func(num);
}

function isPrimo(num){
    for(var i=2;i<num;i++){
        if(num%i == 0)
            return false;
    }
    return true;
}

function isImpar(num){
    return num%2 == 1? true:false;
}

console.log(verificaNum(10, isPrimo));
console.log(verificaNum(11, isPrimo));
console.log(verificaNum(10, isImpar));
console.log(verificaNum(11, isImpar));