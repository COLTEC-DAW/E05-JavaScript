function Check(num, method) {
    return method(num);
}
let isPar = (num) => {
    if (num % 2 == 0)
        return true;
    else
        return false;
};
let isPrime = (num) => {
    for (let i = 2; i <= num / 2; i++) {
        if (Math.floor(num / i) == Math.ceil(num / i))
            return false;
    }
    return true;
};
let isPow2 = (num) => {
    for (let i = num; i > 1; i /= 2) {
        if (i % 2 != 0)
            return false;
    }
    return true;
};
let validate = 19;
console.log(validate);
console.log("Par? " + Check(validate, isPar));
console.log("Primo? " + Check(validate, isPrime));
console.log("Potencia de 2? " + Check(validate, isPow2));
//# sourceMappingURL=CheckNum.js.map