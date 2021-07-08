function deepEquals(obj1, obj2) {
    var keys1 = Object.keys(obj1);
    var keys2 = Object.keys(obj2);
    // Se o número de propriedades for diferente nem percorre os objetos
    if (keys1.length !== keys2.length) return false;

    // Percorre um objeto e verifica se suas propriedades existem no outro
    for (var prop in obj1) {
        if (!(prop in obj2)) {
            return false;
        }
    }
    return true;
}

var obj1 = {
    marca: "Fiat",
    modelo: "Doblo",
    dono: "Rafael",
};

var obj2 = {
    marca: "Fiat",
    modelo: "Doblo",
    dono: "Rafael",
    ano: 2004
}

console.log(deepEquals(obj1, obj2));
console.log(deepEquals(obj1, {
    marca: "Fiat",
    modelo: "Doblo",
    comprador: "Rafael",
}));
console.log(deepEquals(obj1, {
    marca: "Fiat",
    modelo: "Doblo",
    dono: "Rafael",
}));