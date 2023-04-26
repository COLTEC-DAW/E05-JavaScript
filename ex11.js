function deepEquals(obj1, obj2){
    let key1 = Object.keys(obj1);
    let key2 = Object.keys(obj2);

    if(key1.length != key2.length){
        return false
    }
    for(let i = 0; i < key1.length; i++){
        if((key1[i] in obj2) == false){
            return false;
        }
    }
    return true;
}

l1 = {
    value: 1,
    item: 2,
    index: 3,
    teste: 4
}

l2 = {
    value: 3,
    item: 0,
    index: 5,
    teste: 9
}

console.log(deepEquals(l1, l2))