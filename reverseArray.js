function reverseArray(array){
    let reverse = [];
    for (let j = array.length - 1; j >= 0; j--) {
        reverse.push(array[j]);
    }
    return reverse;
}

let a = [5, 'd', 5, 8, 1, 'g'];

console.log(a);
console.log(reverseArray(a));
