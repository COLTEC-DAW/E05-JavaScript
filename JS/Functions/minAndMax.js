function min(a, b){
    if(a < b){
        console.log("O menor elemento é: " + a);
    } else{
        console.log("O menor elemento é: " + b);
    }
}

function max(a, b){
    if(a > b){
        console.log("O maior elemento é: " + a);
    } else{
        console.log("O maior elemento é: " + b);
    }
}

let a = prompt("Digite o num1: ");
let b = prompt("Digite o num2: ");

min(a, b);
max(a, b);