var objeto1 = {
    valor: 10,
    booleano: true
};

var objeto2 = {
    valor: 10,
    booleano: true

};


function deepEquals(obj1, obj2){
    for(var conf in obj1) {
        if(obj1[conf] !== obj2[conf]) 
        return false;
    }
    return true;
}

var result = deepEquals(objeto1, objeto2);
document.write(result);