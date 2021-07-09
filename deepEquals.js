function deepEquals(obj1, obj2){
    var keys1 = Object.keys(obj1);
    var keys2 = Object.keys(obj2);
    var array = [];

    for(var i = 0; i < keys1.length; i++){
        if(keys1[i] in obj2){
            array.push(keys1[i]);
        }
        else if(keys2[i] in obj1){
            array.push(keys2[i]);
        }
    }
    if(keys1.length == array.length && keys2.length == array.length){
        return true;
    }
    else{
        return false;
    }
}

var obj1 = {
    bacana: "demais",
    hehe: 32
};

var obj2 = {
    bacana: "demais",
    hehe: 32,
    ping: "tchola"
};

var eq = deepEquals(obj1, obj2);
alert(eq);