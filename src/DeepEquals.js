var deepEquals = function(obj1, obj2){
    var result = "";
    if (obj1.nome == obj2.nome & obj1.idade == obj2.idade){
        result = "Têm o mesmo nome e a mesma idade. "
    }
    else if (obj1.nome == obj2.nome){
        result = "Têm o mesmo nome. "
    } 
    else if (obj1.idade == obj2.idade){
        result = "Têm a mesma idade."
    }
    return result;
}
function pessoa(id, nome, idade){
    this.id = id;
    this.nome = nome;
    this.idade = idade;
}
var obj1 = new pessoa(0,"Ana", 18);
var obj2 = new pessoa(1, "Maria", 18);
console.log(deepEquals(obj1, obj2));