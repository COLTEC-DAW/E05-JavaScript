function reverseArray(array){

    let newarray = [];

    for(let i = 1; i <= array.length; i++){

        newarray.push(array[(array.length - i)])
    }

    return newarray;
}