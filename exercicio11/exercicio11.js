const obj1 = {
    "idade": 17,
    "nome": "mathias"
}
const obj2 = {
    "idade": 25,
    "nome": "Jorge"
}

console.log(deepEquals(obj1, obj2))

function comparaArr(Arr1, Arr2){
    if(Arr1.length!=Arr2.length){
        return false
    } else{
        for(let i = 0;i<Arr1.length;i++){
            if(Arr1[i].localeCompare(Arr2[i])!=0){
                return false;
            }
        }
        return true;
    }
}

function deepEquals(obj1, obj2){
    propsObj1 = []
    propsObj2 = []
    for(prop in obj1){
        propsObj1.push(prop)
    }
    for(prop in obj2){
        propsObj2.push(prop)
    }
    return comparaArr(propsObj1, propsObj2) ? "Os objetos tem as mesmas propriedades" : "Os objetos não tem as mesmas propriedades";
}