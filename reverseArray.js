// Função que retorna o array passado como parâmetro invertido
function reverseArray(array) {
    let reverse = [];
    let pos = 0;

    // Preenche array invertido
    for(i = array.length - 1; i >= 0; i--) {
        reverse[pos] = array[i];
        pos++;
    }

    return reverse;
}

// Teste
let array = [1,2,3,4,5,6,7,8,9,10];
console.log(reverseArray(array));