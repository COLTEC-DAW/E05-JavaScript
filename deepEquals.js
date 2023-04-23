var meu_obj1 = {
    num: 1,
    nome: "eu",
    haha: null
}
var meu_obj2 = {
    num: 2,
    nome: "voce",
    haha: null
    //jaja: null
}

function deepEquals(obj1, obj2){
    
    var tmp1 = [];
    for (var prop in obj1){
        tmp1.push(prop);
    }
    var tmp2 = [];
    for (var prop in obj2){
        tmp2.push(prop);
    }
    if(JSON.stringify(tmp1) == JSON.stringify(tmp2)){
        return true;
    }else{
        return false;
    }
}

console.log("Os objetos sao iguais? - " + deepEquals(meu_obj1, meu_obj2));