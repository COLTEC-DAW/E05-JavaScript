function ordenacao(array, condicao){
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (condicao(array,i,j)) {
                let aux = array[i];
                array[i] = array[j];
                array[j] = aux;
            }
        }
    }
    
    return array
}

//funções teste
function decrescente(array, i, j){
    return array[i] < array[j];
}
function crescente(array, i, j){
    return array[i] > array[j];
}
function crescenteImpar(array, i, j){
    return array[i] > array[j] && array[i]%2!==0&&array[j]%2!==0;
}
function decrescentePar(array, i, j){
    return array[i] < array[j] && array[i]%2===0&&array[j]%2===0;
}

//testes
ordenacao([1,3,4,5,2,6], decrescentePar);