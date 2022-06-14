function deepEquals1(obj1, obj2){
    let properties1 = Object.getOwnPropertyNames(obj1);
    let properties2 = Object.getOwnPropertyNames(obj2);

    let ehIgual = true;
    properties1.forEach((i) => {
        if(properties1[i] !== properties2[i])
            ehIgual = false;
    })

    return ehIgual; 
}
