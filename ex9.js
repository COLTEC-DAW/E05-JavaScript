function reverseArray(array){
    let reverse = []

    for(let i = array.length - 1; i >= 0; i--){
        reverse.push(array[i])
    }
    return reverse
}

array = [1, 4, 7, 2, 9, 0]

console.log(reverseArray(array))