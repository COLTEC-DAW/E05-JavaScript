function range(min, max){
    var array = [];
    for (let j = min + 1; j < max; j++) {
        array.push(j);
    }
    return array; 
}

function range(min, max, i){
    var array = [];
    for (let j = min + 1; j < max; j += i) {
        array.push(j);
    }
    return array; 
}

let a = parseInt(prompt("Min: "));
let b = parseInt(prompt("Max: "));
let c = parseInt(prompt("Intervalo de variação: "));

console.log(range(a, b));
console.log(range(a,b,c));
