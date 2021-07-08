function min(a, b) {
    if (a > b) {
        return b;
    } else if (a < b) {
        return a;
    }
}

function max(a, b) {
    if (a > b) {
        return a;
    } else if (a < b) {
        return b;
    }
}

console.log(min(10, 5));
console.log(max(10, 5));