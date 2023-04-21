var max = prompt("Número max: ");
var min = prompt("Número min: ");
var j = prompt("Insira o intervalo de varição: ");

function range (max, min){
    var intervalo = [];
    if(max!=min){
        for(let i=min+1; i<max;i++){
            intervalo.push(i);
        }
        console.log(intervalo);
    } else{
        console.log("Números iguais")
    }
}

range(max, min);