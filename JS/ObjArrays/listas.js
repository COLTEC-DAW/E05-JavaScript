function reverseArray(array){
    let reversed = [];
    for(let i = 0; i < array.length; i++){
        reversed.push(parseInt(array[array.length - (i + 1)]));
    }
    return reversed;
}

let seq = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(reverseArray(seq));