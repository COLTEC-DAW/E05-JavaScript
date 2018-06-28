function mod2(number) {
    if (number < 2) {
        return number;
    } else {
        return mod2(number-2);
    }
}

function modN(num, mod) {
    if (num < mod) {
        return num;
    } else {
        return modN(num - mod, mod);
    }
}

console.log( mod2(9) );
console.log( modN(5, 3) );