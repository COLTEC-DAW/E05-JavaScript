function verifica(num, func) {
    return func(num)
}

var isPrime = function (num) {
    for (var i = 2; i < num; i++)
        if (num % i == 0) return false
    return true;
}

var isOdd = function (num) {
    return num % 2 == 1
}

console.log(verifica(11, isOdd))
console.log(verifica(10, isPrime))
console.log(verifica(17, isPrime))
console.log(verifica(4, isOdd))