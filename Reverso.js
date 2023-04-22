function reverseArray(array){

    let tamanho = (array.length - 1);
    let yarra = [];
    let pos = 0;

    for(let comp = tamanho; comp >= 0; comp--){

        yarra[pos] = array[comp];

        pos++;

    }

    return yarra;
}

var numTotalArray = prompt("Digite o total de elementos no seu array: ");
var array = [];
var yarra = []; 

for(let comp = 0; comp < numTotalArray; comp++){

    array.push(prompt("Digite o "+ (comp + 1) +"º elemento: "));

}

yarra = reverseArray(array);

alert("O array digitado ao contrário é: "+ yarra);