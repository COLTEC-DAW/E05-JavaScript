function deepEquals(obj1, obj2){
    var verificaPropriedade = true;
    var prop;

    for (prop in obj1){
        if (prop in obj2){ 
            if (obj1[prop] !== obj2[prop]){ 
               verificaPropriedade = false;
            }
        }

        else{
            verificaPropriedade = false;
        }

        if (!verificaPropriedade){
            return false;
        }
    }
    
    return true;
}
