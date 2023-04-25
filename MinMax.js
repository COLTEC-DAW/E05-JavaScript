function min(a, b){

    if(a < b){

        return a;        

    } 
    else if(a > b){

        return b;

    }
    else {

        return "same";

    } 

}

function max(a, b){

    if(a > b){

        return a;        

    } 
    else if(a < b){

        return b;

    }
    else {
    
        return "same";

    }

}

var a = prompt("Digite um número: ");
var b = prompt("Digite outro número: ");
var maior = max(a, b);
var menor = min(a, b);

if(maior == menor){

    alert("Os dois números são iguais.");

}
else {

    alert("O maior número é: "+ maior +"\nO menor número é: "+ menor);

}