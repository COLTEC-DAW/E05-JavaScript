function minMax(a, b){
    if (a < b){
        return a;
    } else if(b < a){
        return b;
    } else {
        return "Igual";
    }
}

let a = parseInt(prompt("a?"));
let b = parseInt(prompt("b?"));

console.log(minMax(a, b));