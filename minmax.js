var a = prompt("Primeiro número: ");
var b = prompt("Segundo número: ");
var c = prompt("Deseja saber o minimo (1) ou o maximo? (2)");
function min (a, b){
    if(a<b){
        console.log("O menor número é: " + a);
    } else{
        console.log("O menor número é: " + b)
    }
}

function max (a, b){
    if(a>b){
        console.log("O maior número é: " + a);
    } else{
        console.log("O maior número é: " + b)
    }
}

function calcula (c){
    if(c==1){
        min(a, b);
    } else {
        if(c==2){
            max(a,b);
        } else{
            console.log("Opção invalida")
        }
    }
}

calcula(c);