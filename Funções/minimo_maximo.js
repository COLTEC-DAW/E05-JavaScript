var a = 1;
var b = 2;

function min(a, b) {
    if (a > b) {
        return b;
    }
    else if (b > a) {
        return a;
    }
    else{
        return "Iguais";
    }
}

function max(a, b) {
    if (a > b) {
        return a;
    }
    else if (b > a) {
        return b;
    }
    else{
        return "Iguais";
    }
}

console.log("Menor: " + min(a ,b));
console.log("Maior: " + max(a ,b));