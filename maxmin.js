function max (num1, num2) {
    if (num1 > num2) return num1;
    else if (num2 > num1) return num2;
    else return null;
}

function min (num1, num2) {
    if (num1 < num2) return num1;
    else if (num2 < num1) return num2;
    else return null;
}

function intAleatorio() {
    return Math.floor(Math.random() * 100);
}

let min1 = intAleatorio();
let min2 = intAleatorio();
let max1 = intAleatorio();
let max2 = intAleatorio();

console.log(`min(${min1}, ${min2}) = ${min(min1, min2)}`);
console.log(`max(${max1}, ${max2}) = ${max(max1, max2)}`);