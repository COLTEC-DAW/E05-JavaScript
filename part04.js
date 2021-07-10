/**  
 * @description PARTE IV - JavaScript: Funções de Alta Ordem
*/

/**
 * Questão 01 - Ordenação por bubble sort
 * @param {Array} array 
 * @param {Function} comparison método de ordenação
 * @returns array ordenado
 */
function bubbleSort(array, comparison) { 
    for (var i = 0; i < array.length; i++) { 
        for (var j = 0; j < (array.length - i - 1); j++) { 
            if(comparison(array[j], array[j + 1])) {
                var tmp = array[j]; 
                array[j] = array[j + 1]; 
                array[j + 1] = tmp; 
            }
        }        
    }
    return array;
}

/**
 * Questão 02 - Criptografia de String
 * @param {Function} map Parâmetro de criptografia
 * @returns 
 */
String.prototype.encrypt = function (map) {  
    var encrypted = [];
    var substrings = this.split(' ');

    substrings.forEach( (sub, index) => {
        sub = sub.toLowerCase().normalize("NFD").replace(/[^a-zA-Zs]/g, "");
        encrypted[index] = "";
        sub.split('').forEach((char) => encrypted[index] += map(char));
    });

    return encrypted.join(" ");
}

/**
 * Questão 03 - Verifica se um número atende a uma condição
 * @param {Function} condition 
 * @returns Booleano
 */
Number.prototype.verify = function(condition) {
    return condition(this);
}

/**
 * Questão 04 - Transformação de string com base em um método
 * @param {String} string 
 * @param {Function} map método de transformação da string
 * @returns string transformada
 */
String.map = function(string, map){
    return string.split('').map(map).join('');
}

/**
 * Questão 05 - Cria matriz e preenche  com base em uma função matricial com base nos índices da matriz
 * @param {Number} size
 * @param {Function} pattern método de preenchimento
 * @returns
 */
function matrizMatricial(size, pattern){
    var matrix = [];

    for(var rowIndex = 0; rowIndex < size; rowIndex++){
        matrix[rowIndex] = [];

        for(var colIndex = 0; colIndex < size; colIndex++)
            matrix[rowIndex][colIndex] = pattern(rowIndex, colIndex);
    
    }
    return matrix;
}

var arrayTeste = [ 1, 32, 16, 12, 53, 73, 54, 63, 36, 9, 3 ];
var numero = 71; 

// TESTES

console.log(JSON.stringify(bubbleSort(arrayTeste, (x, y) => x < y)));
console.log(JSON.stringify(bubbleSort(arrayTeste, (x, y) => x > y && x % 2)));
console.log(JSON.stringify(bubbleSort(arrayTeste, (x, y) => x > y && !(x % 2))));
console.log(String.map("Whatsapp 2", (x) =>  (/^[aeiou]$/.test(x.toLowerCase())) ? x.toUpperCase() : x ))
console.log(String.map("Whatsapp 2", (x) =>  !(/^[aeiou]$/.test(x.toLowerCase())) ? x.toUpperCase() : x ));
console.log(String.map("WHATSAPP 2", (x) =>  (/^[aeiou]$/.test(x.toLowerCase())) ? x.toLowerCase() : x ));
console.log(String.map("WHATSAPP 2", (x) =>  !(/^[aeiou]$/.test(x.toLowerCase())) ? x.toLowerCase() : x ));
console.log(numero + ' é maior que 3? ' + numero.verify((x) => x > 3));
console.log(numero + ' é ímpar? ' + numero.verify((x) => x % 2 != 0));
console.log(numero + ' é primo? ' + numero.verify(function(x) {
    if (x == 1) return false;

    var divisor = 2;

    while(x % divisor != 0)
        divisor++;

    return x == divisor;
}));
console.log(JSON.stringify(matrizMatricial(2, (x, y) => x + y), null));
console.log(JSON.stringify(matrizMatricial(2, (x, y) => x * y), null));
console.log(JSON.stringify(matrizMatricial(2, (x, y) => x == y ? 1 : 0), null));
console.log(JSON.stringify(matrizMatricial(2, (x, y) => x ^ 2/(y + 1)), null));
console.log(JSON.stringify(matrizMatricial(2, (x, y) => x > y ? 1 : (x < y ? 5 : 0 )), null));
console.log("Ola isso é um teste".encrypt((x) => {
        var alpha = "abcdefghijklmnopqrstuvwxyz".split('');
        var crypt;

        for(var index = 0; index < alpha.length; index++){
            if(alpha[index] == x){
                index += 3;

                if(index > 25) 
                    index -= 26;
                
                crypt = alpha[index];
                break;
            }
        }
    
        return crypt;
    }))