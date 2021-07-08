// Como isso poderia ser recursivo??

var mod2 = function (number) {
    return (number % 2 == 0);
}

var mod = function (num, mod) {
    return (num % mod == 0);
}

console.log(mod2(18));
console.log(mod(18, 9));