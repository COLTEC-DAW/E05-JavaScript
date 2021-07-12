function intervalo(min, max, x){

    var array = [];

    for(i=min; i<=max; i+=x){
        array.push(i);
    }

    return array;
}

var minimo = prompt("(Intervalo) Valor minimo:");
var maximo = prompt("(Intervalo) Valor maximo:");
var maximo = prompt("(Intervalo) Intervalo:");

document.write(intervalo(minimo, maximo, intervalo) + "<br>");