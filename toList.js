// Função que transforma um array em uma lista
function toList(array) {
    // Valor do fim da lista
    let list = null;

    // Preenche lista a partir do final do array
    for (i = array.length - 1; i >= 0; i--) {
        list = {rest: list, value: array[i]};
    }

    return list;
}

// Teste
let array = [1,2,3,4,5,6,7,8,9,10];
console.log(toList(array));