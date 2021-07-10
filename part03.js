/**  
 * @description PARTE III - JavaScript: Objetos & Arrays
*/

/**
* Questão 01 - Range - Cria um vetor de inteiros entre um minimo e um maximo
* @param {Number} min 
* @param {Number} max 
* @param {Number} stp 
* @returns {Array}
*/
Array.range = function(min, max, stp = 1){
    var array = [min]
    while(min + stp <= max)
        array.push(min += stp);
    
    return array;
}

/**
* Questão 02 - Inverter dados de um array
* @param {Array} array 
* @returns {Array}
*/
function reverseArray(array){
    var reversed = [];
    
    array.forEach(element => {
        reversed.unshift(element);
    })
    
    return reversed;
}

/**
* Questão 03 - Conversão de um array em lista
* @param {Array} array 
*/
function toList(array){
    var object = {};

    while(array.length != 0){
        object.value = array.shift();
        object.rest = (array.length) ? toList(array) : null;
    }
    return object;
}

/**
* Questão 04 - Deep equals entre objetos
* @param {Object} obj1 
* @param {Object} obj2 
*/
function deepEquals(obj1, obj2) {

    if(obj1 === obj2) 
        return true;

    if(obj1 !== Object(obj1) && obj2 !== Object(obj2)) 
        return obj1 === obj2;

    if(Object.keys(obj1).length !== Object.keys(obj2).length)
        return false;

    for(let property in obj1)
    {
        if(!(property.hasOwnProperty(property)))
            return false;

        if(!deepEquals(obj1[property], obj2[property])) 
            return false;
    }

    return true;
}

// TESTES

console.log(JSON.stringify(toList([1, 2, 3, 4]), null, 2)); // IMPRESSÃO IDENTADADA
console.log(range(1, 5, 2));
console.log(reverseArray(Array.range(1, 5, 2)));
console.log(deepEquals([2], [2]));