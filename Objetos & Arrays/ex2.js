function reverseArray(arr){
    var nArr = [];
    for(var i = 0; i < arr.length; i++)
        nArr.unshift(arr[i]);
    return nArr;
}

reverseArray([1,2,3,4]);
