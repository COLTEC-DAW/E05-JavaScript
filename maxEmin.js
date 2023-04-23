var num1 = prompt("Digite o primeiro valor - ");
var num2 = prompt("Digite o segundo valor - ");

function min(a, b){
    if(a < b){
        return a;
    }else{
        return b;
    }
}

function max(a, b){
    if(a < b){
        return b;
    }else{
        return a;
    }
}

console.log("min - "+ min(num1, num2));
console.log("max - "+ max(num1, num2));