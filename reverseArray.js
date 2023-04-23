var meu_array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

function reverseArray(array){
    
    var reverso = [];
    for(i = 1; i <= array.length; i++){
        reverso.push(array[array.length - i]);
    }
    return reverso;
}

console.log(reverseArray(meu_array));