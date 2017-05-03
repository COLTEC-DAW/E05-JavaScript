function deepEquals(obj1, obj2){
    var properties1 = Object.keys(obj1);
    var properties2 = Object.keys(obj2);

    if(obj1 === obj2) return true;

    if(properties1.length != properties2.length) return false;

    for(var i = 0; i < properties1.length; i++){
        if(obj1[properties1[i]] !== obj2[properties2[i]]) return false;
    }

    return true;
}