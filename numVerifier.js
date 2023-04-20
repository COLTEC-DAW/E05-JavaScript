function checkNumber(num, checkFunc) {
    return checkFunc(num);
}

function isOdd(num) {
    return num % 2 !== 0;
}

function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

const num = 2;
const num2 = 17;

console.log(checkNumber(num, isOdd));
console.log(checkNumber(num, isPrime));

console.log(checkNumber(num2, isOdd));
console.log(checkNumber(num2, isPrime));
