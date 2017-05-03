var min = prompt("Mínimo");
var max = prompt("Máximo");
var it = prompt("Intervalo");

function range1(min, max){

    var array = [];

    for(var i=min; i<=max; i++){
        array.push(i);
    }

    return array;
}

function range2(min, max, it){

    var array = [];

    for(var j=min; j<=max; j=(j+it)){
        array.push(j);
    }

    return array;
}

document.write(range1(min, max));
document.write(range2(min, max, it));