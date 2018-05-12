/**
 * imprimir os numeros entre o min e o max, que sao informados pelo usuario
 */

function range(min, max, i) {
    var array = [];
    min = min + i;  //o primeiro valor eh o valor minimo mais o valor do intervalo
    for (min;min < max;min = min+i) {
        array.push(min);
    }
    return array;

}
var min = prompt("Digite o numero minimo: ");
min = parseInt(min);  //as vezes o prompt acha que eh uma string, entao convertemos para int
var max = prompt("Digite o numero maximo: ");
max = parseInt(max);
var i = prompt("Digite o intervalo: ");
i = parseInt(i);
console.log(range(min,max, i).join(", "));


/**
 * Retornar reverso de um array
 */

function reverseArray(array) {
    var i=array.length-1;
    var arrayReverso = [];
    for (i;i>=0;i--) {
        arrayReverso.push(array[i]);
    }
    return console.log(arrayReverso.join(", "));
}

var arrayNormal = ["um", "dois", "tres", "quatro"];
reverseArray(arrayNormal);

/**
 * Converter array para lista
 */

function toList(array) {
    var list = {};
    var i = 0;
    for (i;i<array.length;i++) {
        list.value = array[i];
        list.rest = value = {};
    }
    return console.log(list);
}

array = [1, 2, 3];
toList(array);


/**
 * verificar se dois objetos possuem as mesmas propriedades
 */

//O meu codigo verifica somente se eles possuem as mesmas propriedades, pois voce nao especificou se as propriedades precisam possuir o mesmo valor
function deepEquals(obj1, obj2) {
    var propriedadesOBJ1 = [];
    var propriedadesOBJ2 = [];
    for (var prop in obj1) {            //var prop recebe cada propriedade do obj1
        propriedadesOBJ1.push(prop);    //push na variavel propriedadesOBJ1 para verificar depois com a prop 2
    }
    for (var prop2 in obj2) {            //var prop recebe cada propriedade do obj2
        propriedadesOBJ2.push(prop2);    //push na variavel propriedadesOBJ2 para verificar com a prop 1
    }
    console.log(propriedadesOBJ1.join(", "));
    console.log(propriedadesOBJ2.join(", "));
    
    /*verificar se as propriedades do obj1 = as prop do obj2 =*/
    for(var i=0;i<propriedadesOBJ1.length || i<propriedadesOBJ2.length;i++) {
        if(propriedadesOBJ1[i] != propriedadesOBJ2[i]) {
            return console.log("Nao possuem as mesmas propriedades!");
        }
    }
    return console.log("Possuem as mesmas propriedades!");
}
var obj1 = {
    nome: "guilherme", 
    sobrenome: "assis",
    turma: 303
}
var obj2 = {
    nome: "teste",
    sobrenome: "lima",
    turma: 306,
    subTurma: "b"
}
deepEquals(obj1, obj2);