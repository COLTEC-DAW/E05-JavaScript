var min = function(a, b){
    if(a < b) { return a; } 
    else { return b; }
}
var max = function(a, b){
    if(a > b) { return a; } 
    else { return b; }
}
//main
var a = prompt("Digite o valor do 1° elemento. ", "Valor");
var b = prompt("Digite o valor do 2° elemento. ", "Valor");
console.log("Maior: " + max(a,b));
console.log("Menor: " + min(a,b));
