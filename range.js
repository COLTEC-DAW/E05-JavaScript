function range(min, max, i){
    let array = [];
    for(let j = min; j <=max; j+=i){
        array.push(j);
    }
    return array;
}


let min = parseInt(prompt("min"));
let max = parseInt(prompt("max"));
let i = parseInt(prompt("i"));

console.log(range(min,max,i));