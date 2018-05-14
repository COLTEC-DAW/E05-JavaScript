var Objeto1 = {nome: "Willian", usuario: "willzinho2018", estudando : true, dinheiro: "0"};
var Objeto2 = {nome: "Willian", usuario: "willzinho2018", estudando : true, dinheiro: "0"};
var Objeto3 = {nome: "Willian", usuario: "willzinho2018", estudando : true, dinheiro: 0};

function deepEquals(obj1, obj2) {
    for (const key in obj1) {
        if (!(obj1[key] === obj2[key])) {
            return false;
        }
    }
    return true;
}

console.log(deepEquals(Objeto1, Objeto2)); //true
console.log(deepEquals(Objeto1, Objeto3)); //false
