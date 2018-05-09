function min(a, b) {
    if(a == b)
    console.log("iguais")
    else if (a < b)      
    console.log("Menor é " + a)
    else
    console.log("Menor é " + b)
}

function max(a, b) {
    if(a == b)
    console.log("iguais")
    else if(a>b)
    console.log("Maior é " + a)
    else
    console.log("Maior é " + b)
    
}

var a = prompt("Digite o valor de A")
var b = prompt("Digite o valor de B")

min(a, b)
max(a, b)