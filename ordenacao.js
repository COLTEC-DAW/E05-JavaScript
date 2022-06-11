function ordenacao(array, tipo){
    let aux;
    for(let i = 0; i<array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(tipo(array[j], array[j+1])){
                aux = array[j];
                array[j] = array[j+1];
                array[j+1] = aux;
            }
        }
    }
    return array;
}

function descrescente(a, b){
    return a > b;
}

function crescente(a, b){
    return a < b;
}


function mainOrdenacao()
{
    var array = [1,2,3,4,5,6,7,8,9,10];

    console.log('Array antes da ordenação: ' + array);
    console.log('Decrescente' + ordenacao(array, descrescente));
    console.log('Crescente' + ordenacao(array, crescente));
}