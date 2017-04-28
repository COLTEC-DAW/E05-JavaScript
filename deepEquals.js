function deepEquals(obj1, obj2){
    var keys1 = Object.keys(obj1);
    var keys2 = Object.keys(obj2);

    if(obj1 === obj2)
        return true;

    for(var i=0;i<keys1.length&&i<keys2.length;i++){
        if(keys1[i] == keys2[i]){
            if(obj1[keys1[i]] != obj2[keys2[i]])
                return false;
        }
    }
    return true;
}

var obj1 = {
    a: 1,
    b: 2,
    c: 3
}

var obj2 = {
    a: 1,
    b: 2,
    c: 3
}

var obj3 = {
    a: 1,
    b: 4,
    c: 3
}

console.log(deepEquals(obj1, obj2));
console.log(deepEquals(obj1, obj3));