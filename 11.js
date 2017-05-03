function deepEquals(obj1, obj2){
    if(obj1 == obj2){
        return true;
    }
    else{
        return false;
    }
}

var obj1 = {
    nome: "jose"
}
var obj2 = obj1;

var obj3 = {
    nome: "jose"
}

var confirm = deepEquals(obj1,obj2);
console.log(confirm);
var confirm2 = deepEquals(obj1,obj3);
console.log(confirm2);