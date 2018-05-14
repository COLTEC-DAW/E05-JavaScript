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
    var list2 = list;
    for (var i = 0; i < array.length; ++i) {
        list2.value = array[i];
        list2.rest = {};
        list2 = list2.rest;
    }
    return console.log(list);
}

array = [1, 2, 3];
toList(array);


/**
 * verificar se dois objetos possuem as mesmas propriedades
 */

function deepEquals(obj1, obj2) {
    /*Verificar se obj1 possui as mesmas propriedades do obj2*/
    for (var prop in obj1) {            
        if (obj1[prop] != obj2[prop])   {
            return console.log("Nao possuem as mesmas propriedades..");
        }
    }
    /*Verificar se obj2 possui as mesmas propriedades do obj1*/
    for (var prop in obj2) {            
        if (obj2[prop] != obj1[prop])   {
            return console.log("Nao possuem as mesmas propriedades..");
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
    sobrenome: "assis",
    turma: 303,
    nome: "guilherme"
}

/*obj3 eh diferente para fazer teste!*/
var obj3 = {
    teste: "diferente",
    teste2: "diferente2"
}
deepEquals(obj1, obj2);
deepEquals(obj1, obj3);