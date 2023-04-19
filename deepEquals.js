function deepEquals(obj1, obj2){
    let objK1 = Object.keys(obj1);
    let objK2 = Object.keys(obj2);

    if (objK1.length !== objK2.length) return false;

    for(let key of objK1){
        let v1 = obj1[key];
        let v2 = obj2[key];

        let isObj = isObject(v1) && isObject(v2);
        if((isObj && !deepEquals(v1, v2)) || (!isObj && (v1 !== v2))) return false;
    }

    return true;
}

function isObject(obj){
    return obj!=null && typeof obj === "object";
}

const obj1 = {
    "nome" : "smola",
    "matricula" : "2021951450",
    "idade" : "17",
};

const obj2 = {
    "nome" : "leo",
    "matricula" : "2021951566",
    "idade" : "17",
};

const obj3 = {
    "nome" : "smola",
    "matricula" : "2021951450",
    "idade" : "17",
};

console.log(deepEquals(obj1, obj3));
console.log(deepEquals(obj1, obj2));