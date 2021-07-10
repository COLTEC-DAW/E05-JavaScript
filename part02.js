/**  
 * @description PARTE II - JavaScript: Funções
*/


/**
 * Questão 01 - Max value de um vetor
 * @returns maior valor dentro de um vetor
 */
Array.prototype.max = function(){
    var max = this[0];
    this.forEach((value) => {
        if (value > max) 
            max = value;
    })
        
    return max;
}

/**
 * Questão 01 - Min value de um vetor
 * @returns menor valor dentro de um vetor
 */
Array.prototype.min = function(){
    var min = this[0];
    this.forEach((value) => {
        if (value < min) 
            min = value;
    })
        
    return min;
}

/**
 * Questão 02 - Recursividade MOD
 * @returns 
 */
function mod(value, d = 2){
    return (d == value) ? 0 : (d < value) ? mod(value - d, d) : value; 
}

/**
 * Questão 02 - Recursividade MOD de 2
 * @returns 
 */
 function mod2(value){
    return mod(value);
}

/**
 * Questão 3 - Contando caracteres de uma String
 * @param {String} str 
 * @param {String} char || substr
 * @returns quantidade de caracteres que se repetem
 */
function countChars(str, char){
    return str.split('').map( (value, index) => { if(value === char) return index; }).filter(Boolean).length;
}

// TESTES

console.log([2, 3, 4, 5].min() + ' ' + [2, 3, 4, 5].max()) 
console.log(countChars("Isso é um teste", "e"));
console.log(mod(300, 7))
console.log(mod2(300))