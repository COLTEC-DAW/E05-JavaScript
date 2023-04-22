function stringTransform(string, func){
    let transform = '';
    for(let i = 0; i < string.length; i++){
        transform += func(string[i]);
    }
    return transform;
}

function vogalMaiusc(char){
    if(/[aeiou]/i.test(char)) return char.toUpperCase();
    else return char;
}

function consoanteMaiusc(char){
    if(/[bcdfghjklmnpqrstvwxyz]/i.test(char)) return char.toUpperCase();
    else return char;
}

function vogalMinusc(char){
    if(/[aeiou]/i.test(char)) return char.toLowerCase();
    else return char;
}

function consoanteMinusc(char){
    if(/[bcdfghjklmnpqrstvwxyz]/i.test(char)) return char.toLowerCase();
    else return char;
}

let string = "Hello Earth!";

console.log(stringTransform(string, vogalMaiusc));
console.log(stringTransform(string, consoanteMaiusc));
console.log(stringTransform(string, vogalMinusc));
console.log(stringTransform(string, consoanteMinusc));
