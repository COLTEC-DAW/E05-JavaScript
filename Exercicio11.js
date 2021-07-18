var obj1 = {
    erro: "teste1",
};

var obj2 = {
    teste: "teste2"
};

var igual = deepEquals(obj1, obj2);
alert(igual);

function deepEquals(obj1, obj2) {
    var objeto1 = Object.keys(obj1);
    var objeto2 = Object.keys(obj2);
    var array = [];

    for (var i = 0; i < objeto1.length; i++) {
        if (objeto1[i] in obj2) {
            array.push(objeto1[i]);
        } else if (objeto2[i] in obj1) {
            array.push(objeto2[i]);
        }
    }
    if (objeto1.length == array.length && objeto2.length == array.length) {
        return true;
    } else {
        return false;
    }
}