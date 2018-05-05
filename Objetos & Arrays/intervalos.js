var Min = 2;
var Max = 5;
var Intervalo = 2;

function range(min, max, i) {
    var minhaString = [];

    for (let c = min; c <= max; c = c + i) {
        minhaString.push(c);
    }

    return minhaString;
}

console.log(range(Min, Max, Intervalo));