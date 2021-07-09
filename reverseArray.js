function reverseArray(array){
    var newArray = [];
    for(i = 0; i < array.length; i++){
        newArray[i] = array[i];
    }
    return newArray.reverse();
}

var array = [10, 20, 30, 40, 50, 60];
console.log(array)

var arrayRev =  reverseArray(array);
console.log(arrayRev);

console.log(array);
