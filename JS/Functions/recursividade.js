function mod2(number){
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function mod(num, mod){
    if (num % mod === 0) {
        return true;
    }else {
        return false;
    }
}

console.log(mod2(1));
console.log(mod2(2));
console.log(mod2(3));
console.log(mod2(4));

console.log(mod(1, 0));
console.log(mod(1, 2));
console.log(mod(10, 5));
console.log(mod(10, 8));