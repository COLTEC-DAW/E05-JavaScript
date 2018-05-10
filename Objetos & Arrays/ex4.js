function deepEquals(obj1, obj2){
    var arr1 = Object.getOwnPropertyNames(obj1);
    var arr2 = Object.getOwnPropertyNames(obj2);

    if(arr1.length == arr2.length){
        for(var i = 0; i < arr1.length; i++){
            if(!obj2.hasOwnProperty(arr1[i]))
                return false;
        }
        return true;
    }
    return false;
}

deepEquals({"Nome": "Rita"}, {"Nome": "João"});
