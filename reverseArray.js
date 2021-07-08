function reverseArray(array){
    var array2 = [];
    for(var i = array.length - 1;i >= 0; i--){
        array2.push(array[i]);
    }
    return array2;
}

array = [1,2,3,4,5,6,7,8,9,10];
console.log(array);
array = reverseArray(array);
console.log(array);