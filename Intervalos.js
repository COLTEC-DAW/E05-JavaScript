function range(min, max){

    let numerosEntre = [];

    for(let comp = (min + 1); comp < max; comp++){

        numerosEntre.push(comp);

    }

    return numerosEntre;

}

var numMin = prompt("Digite um número: ");
var numMax = prompt("Digite outro número: ");
var aux = numMin;

numMin = numMin++;
numMax = numMax++;

if(aux > numMax){

    aux = numMax;
    numMax = numMin;
    numMin = aux;

}


numeros = range(numMin, numMax);

console.log("Os números entre "+ numMin +" e "+ numMax +" são: "+ numeros +".");