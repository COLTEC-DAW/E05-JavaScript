function min(a, b) {
    if (a < b) {
        console.log("O menor numero é: " + a);
    } else {
        console.log("O menor numero é: " + b);
    }
}

function max(a, b) {
    if (a > b) {
        console.log("O maior numero é: " + a);
    } else {
        console.log("O maior numero é: " + b);
    }
}

var a = prompt("Digite o primeiro numero: ");
var b = prompt("Digite o segundo numero: ");
max(a, b);
min(a, b);