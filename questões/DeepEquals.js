function deepequals (obj1, obj2) {

    var prop1 = Object.getOwnPropertyNames(obj1);
    var prop2 = Object.getOwnPropertyNames(obj2);

    if(prop1.length !== prop2.length){//para caso o objeto for array checa se os tamanhos são iguas
        return false
    }
    
    if(prop1.length === 0){//se tiver so 1 elemento compara eles
        if(obj1 === object2){
            return true
        }
        else{
            return false
        }
    }

    for(var i = 0; i < prop1.length; i++) {//compara cada elemento no caso de um array
        var prop = prop1[i];

        if(obj1[prop] !== obj2[prop]){
            if(equals(obj1[prop], obj2[prop])){
                continue;
            }
            else{
                return false
            }
        }
    }

    return true;
}

let Array1 = [];
let Arra3 = [3];

console.log(deepequals(Array1, Arra3));