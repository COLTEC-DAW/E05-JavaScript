function range(min, max, i){

    let numerosEntre = [];

    for(let comp = (min + 1); comp < max; comp++){

        numerosEntre.push(comp);
        comp = comp + (i - 1);

    }

    return numerosEntre;

}

var numMin = prompt("Digite um número: ");
var numMax = prompt("Digite outro número: ");
var intervalo = prompt("Digite o intervalo entre eles: ");
var aux = numMin;

if(aux > numMax){

    aux = numMax;
    numMax = numMin;
    numMin = aux;

}

numMin = numMin++;
numMax = numMax++;
intervalo = intervalo++;

numeros = range(numMin, numMax, intervalo);

console.log("Os números entre "+ numMin +" e "+ numMax +" contando de "+ intervalo +" em "+ intervalo +" são: "+ numeros +".");