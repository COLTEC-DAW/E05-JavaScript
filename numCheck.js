function numCheck(num, func){
    return func(num);
}

function ehImpar(num){
    return num % 2 === 1;
}

function ehPrimo(num){
    if (num <= 1) return false;
    for(let i = 2; i < num/2; i++){
        if(num % i === 0) return false;
    }
    return true;
}

console.log(numCheck(3, ehImpar));
console.log(numCheck(2, ehImpar));
console.log(numCheck(3, ehPrimo));
console.log(numCheck(2, ehPrimo));
