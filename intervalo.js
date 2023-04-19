function range(min, max){
    for (let j = min + 1; j < max; j++) {
        console.log(j);
    }
}

let a = parseInt(prompt("Min: "));
let b = parseInt(prompt("Max: "));

range(a, b);
