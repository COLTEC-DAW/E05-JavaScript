const hash = '#';

/**
 * Questao 01 - Desenhando um triângulo
 * @param {Number} height Altura
 * @returns {String} Triângulo 
 */
function halfTriangle(height){
    var line = "";
    for(var i = 0; i <= height; i++)
        line += hash.repeat(i) + "\n";
    
    return line;
}

/**
 * Questao 02 - Imprimir um tabuleiro de xadrez
 * @param {Number} height Altura
 * @returns {String}
 */
function chessLike(height){
    var chess = "";
    for(var i = 0; i < height; i++)
        chess += i % 2 == 0 ? hash.concat(" ").repeat(4).concat("\n") : " ".concat(hash).repeat(4).concat("\n");

    return chess;
}

/**
 * Questao 03 - Checar se uma palavra é palindromo
 * @param {Number} string 
 * @returns {Boolean} 
 */
const checkPalindrome = function(string){
    const ignoreSpaces = str => str.split(' ').join('');
    return ignoreSpaces(string.toLowerCase()) === ignoreSpaces(string.toLowerCase().split('').reverse().join(''));
}

/**
 * Questao 04 - Troca valores de um array baseado nas divisoes por 3 e 5
 * @param {Number} width tamanho do array de 1 a Width; 
 * @returns Array mapeado
 */
function fizzBuzz(width = 100){
    var arr = Array.from({length: width}, (x, i) => i + 1);
    return arr.map( (x) => x = (x % 3 == 0 && x % 5 == 0) ? String("FizzBuzz") : x % 3 == 0 ? String("Fizz") : x % 5 == 0 ?  String("Buzz") : x)
}

console.log(fizzBuzz());
console.log(halfTriangle(5));
console.log(chessLike(8));
console.log(checkPalindrome('Radar'));