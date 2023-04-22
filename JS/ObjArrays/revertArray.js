function reverseArray(array){
    let reversed = [];

    for(let i = 0; i < array.length; i++){
        reversed.push(parseInt(array[array.length - (i + 1)]));
    }
    
    return reversed;
}

let array = [1, 2, 3, 4, 5];
console.log(reverseArray(array));