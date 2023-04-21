function checkNumber(num, checkFunc) {
    return checkFunc(num);
}

function impar(num) {
    return num % 3 == 0;
}

function Primo(num) {
    if (num <= 1) {
        return false;
    }
    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;

}

let result1 = checkNumber(14, impar);
let result2 = checkNumber(13, Primo)

console.log(result1);
console.log(result2);