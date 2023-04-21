/* BASIC CONCEPTS */

function drawTriangle(num){
    for(let x = 1; x <= num; x++){
        var line = ''
        for(let k = 1; k <= x; k++)
            line += '#'
        line += '\n'
        console.log(line)
    }    
}

function chessTable(size, hash = ''){    
    for(let x = 0; x < size; x++) { 
        if ( x % 2 === 0)
            hash+= ' '
        for(let k = 0; k < size-1; k++)
            hash.charAt(hash.length-1) === '#' ? (hash += ' ') : (hash += '#')
        hash += '\n'
    }     
    console.log(hash)
}

function palindrome(str) {
 var re = /[^A-Za-z0-9]/g;
 str = str.toLowerCase().replace(re, '');
 var len = str.length;
 for(let x = 0; x < len/2; x++) {
   if (str[x] !== str[len - 1 - x])
       return false;
 }
 return true;
}

function aDifferentProg(){
    for(let x = 0; x <= 100; x++) {
        if (x == 0) {console.log(x.toString())} 
        else if ((x % 3 == 0) && (x % 5 == 0))
            console.log('FIZZBUZZ')
        else if (x % 3 == 0)
            console.log('FIZZ')
        else if (x % 5 == 0)
            console.log('BUZZ')
        else {console.log(x.toString())}
    }
}


/* FUNCTIONS */

function max(a, b){
    if (a > b)
        return a;
    if (b > a)
        return b;
}
function min(a, b){
    if (a > b)
        return b;
    if (b > a)
        return a;
}

function mod2(num){
    if (num % 2 == 0)
        return true;
    return false;
}

function modx(num, mod){
    if(num == true)
        return true
    else if(num == false)
        return false
    else {
        if(num % mod == 0){
            return modx(true, mod)
        }else{
            return modx(false, mod)
        }
    }
}

function countChars(str, c){
    var carac = 0
    for(let x = 0; x < str.length; x++){
        if (c == str[x])
            carac++
    }
    return carac;
}


/* ARRAYS and OBJ */

function range(min, max, array = []){
    for(let x = min; x <= max; x++)
        array.push(x);
    return array;
}

function rangeI(min, max, i, array = []){
    for(let x = min; x <= max; x += i)
        array.push(x);
    return array;
}

function reverseArray(array, array2 = []) {
  let k = 0;
  let x = array.length;
  while (x > 0) {
    array2[k] = array[x - 1];
    x--; k++;
  }
  return array2;
}

function toList(array, list = null) {
  for (let x = array.length - 1; x >= 0; x--) {
    list = { value: array[x], rest: list }
  }
  return list;
}

function deepEquals(obj1, obj2) {
  if (typeof obj1 === "object" && typeof obj2 === "object") {
    if (obj1 === null && obj2 === null)
      return true;

    if (obj1 === null || obj2 === null)
      return false;

    if (Object.keys(obj1).length !== Object.keys(obj2).length)
      return false;

    for (let prop in obj1) {
      if (!deepEquals(obj1[prop], obj2[prop]))
        return false;
    }
    return true;
  }
  return obj1 === obj2;
}


/* HIGH ORDER FUNCTIONS */

//Bubble sort in
function bubbleSort(array, criterio) {
  let tamanho = vetor.length;

  for (let x = 0; x < tamanho - 1; x++) {
    for (let k = 0; k < tamanho - x - 1; k++) {
      if (criterio(array[k], array[k + 1])) {
        let tmp = vetor[k];
        array[k] = array[k + 1];
        array[k + 1] = tmp;
      }
    }
  }
  return vetor;
}

function criterioCrescente(a, b) {
  return a > b
}
function criterioDecrescente(a, b) {
  return a < b
}

function criterioCrescenteImpares(a, b) {
  if (a % 2 !== 0 && b % 2 !== 0)
    return a > b
  else if (a % 2 !== 0)
    return true
  else
    return false
}

function criterioDecrescentePares(a, b) {
  if (a % 2 === 0 && b % 2 === 0)
    return a < b
  else if (a % 2 === 0)
    return true
  else
    return false
}
//Bubble sort out

function cifraCaesar(str, shift) {
  let chars = str.split('');

  for (let i = 0; i < chars.length; i++) {
    let code = chars[i].charCodeAt(0);

    if (code >= 65 && code <= 90)
      code = ((code - 65 + shift) % 26) + 65 // maiúsculas
    else if (code >= 97 && code <= 122)
      code = ((code - 97 + shift) % 26) + 97 // minúsculas

    chars[i] = String.fromCharCode(code);
  }
  return chars.join('');
}

// Number verify in
function ehImpar(num) {
  return num % 2 !== 0;
}

function ehPrimo(num) {
  if (num <= 1) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
}

function verifyN(num, verification) {
  return verification(num);
}
// Number verify out

//Matrix exercise in
function criaMatriz(funcaoMatricial, linhas, colunas) {
  const matriz = [];

  for (let i = 0; i < linhas; i++) {
    const linha = [];
    for (let j = 0; j < colunas; j++) {
      linha.push(funcaoMatricial(i, j));
    }
    matriz.push(linha);
  }

  return matriz;
}


function testaMatriz(){
    const somaMatriz = (i, j) => i + j;
    console.log(criaMatriz(somaMatriz, 3, 3));

    console.log('\n')
    
    const produtoMatriz = (i, j) => i * j;
    console.log(criaMatriz(produtoMatriz, 3, 3));
    
    console.log('\n')
    
    const identidadeMatriz = (i, j) => i === j ? 1 : 0;
    console.log(criaMatriz(identidadeMatriz, 3, 3));
    
    console.log('\n')
    
    const outraMatriz = (i, j) => i ** 2 / (j + 1);
    console.log(criaMatriz(outraMatriz, 3, 3));

    console.log('\n')
    
    const matrizDiferente = (i, j) => i > j ? 1 : (i < j ? 5 : 0);
    console.log(criaMatriz(matrizDiferente, 3, 3));
}
//Matrix exercise out

//Upp-Lower case in
function transformString(str, transformFunc) {
  let transformedStr = '';
  for (let i = 0; i < str.length; i++) {
    transformedStr += transformFunc(str.charAt(i));
  }
  return transformedStr;
}

function uppercaseVowels(char) {
  const vowels = 'aeiouAEIOU';
  return vowels.indexOf(char) >= 0 ? char.toUpperCase() : char;
}

function uppercaseConsonants(char) {
  const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
  return consonants.indexOf(char) >= 0 ? char.toUpperCase() : char;
}

function lowercaseVowels(char) {
  const vowels = 'aeiouAEIOU';
  return vowels.indexOf(char) >= 0 ? char.toLowerCase() : char;
}

function lowercaseConsonants(char) {
  const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
  return consonants.indexOf(char) >= 0 ? char.toLowerCase() : char;
}
//Upp-Lower case out


/* 'MAIN' */

console.log('\n' + '=========================================================' + '\n')
console.log('\t\t\t\t\t' +             'BASIC CONCEPTS')
console.log('\n' + '=========================================================' + '\n')

drawTriangle(4)

console.log('\n' + '---------------------------------------------------------' + '\n')

chessTable(8)

console.log('\n' + '---------------------------------------------------------' + '\n')

aDifferentProg()

console.log('\n' + '---------------------------------------------------------' + '\n')

console.log(palindrome("A man, a plan, a canal. Panama") ? 'yes, this is a palindrome' : 'no, this is not a palindrome')


console.log('\n')



console.log('\n' + '=========================================================' + '\n')
console.log('\t\t\t\t\t' +                 'FUNCTIONS')
console.log('\n' + '=========================================================' + '\n')

console.log('higher value: ' + max(3, 5))
console.log('lower value: ' + min(3, 5))

console.log('\n' + '---------------------------------------------------------' + '\n')

console.log(mod2(5) ? 'true, the number is divisible for 2' : 'false, the number isn\'t divisible for 2')

console.log('\n' + '---------------------------------------------------------' + '\n')

console.log(modx(10, 5) ? 'true, the number is divisible' : 'false, the number isn\'t divisible')

console.log('\n' + '---------------------------------------------------------' + '\n')

console.log('\'o rato roeu a roupa do rei de roma\' has ' + countChars('o rato roeu a roupa do rei de roma', 'r') + ' characters ' + '\'r\'')

console.log('\n' + '---------------------------------------------------------' + '\n')


console.log('\n')



console.log('\n' + '=========================================================' + '\n')
console.log('\t\t\t\t\t' +                 'ARRAYS & OBJECTS')
console.log('\n' + '=========================================================' + '\n')


console.log('using range: ' + range(0, 10))
console.log('using range i: ' + rangeI(0, 10, 2))

console.log('\n' + '---------------------------------------------------------' + '\n')

console.log('[1,2,3] --> [' + reverseArray([1, 2, 3])+']')

console.log('\n' + '---------------------------------------------------------' + '\n')

console.log(toList([1, 3, 6]))

console.log('\n' + '---------------------------------------------------------' + '\n')

const obj1 = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
  },
};

const obj2 = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
  },
};

const obj3 = {
  name: "Mary",
  age: 25,
};

console.log(deepEquals(obj1, obj2))
console.log('\n')
console.log(deepEquals(obj1, obj3))

console.log('\n' + '---------------------------------------------------------' + '\n')


console.log('\n')



console.log('\n' + '=========================================================' + '\n')
console.log('\t\t\t\t\t' +                 'HIGH ORDER FUNCTIONS')
console.log('\n' + '=========================================================' + '\n')


const vetor = [3, 5, 1, 4, 2];

console.log('crescente: ' + bubbleSort(vetor, criterioCrescente))
console.log('decrescente: ' + bubbleSort(vetor, criterioDecrescente))
console.log('crescente-impar: ' + bubbleSort(vetor, criterioCrescenteImpares))
console.log('decrescente-par: ' + bubbleSort(vetor, criterioDecrescentePares))

console.log('\n' + '---------------------------------------------------------' + '\n')

console.log('mojang eh meu ovo => ' + cifraCaesar('mojang eh meu ovo', 3))

console.log('\n' + '---------------------------------------------------------' + '\n')

console.log(verifyN(3, ehImpar))
console.log(verifyN(3, ehPrimo))
console.log(verifyN(2, ehImpar))
console.log(verifyN(2, ehPrimo))
console.log(verifyN(6, ehPrimo))

console.log('\n' + '---------------------------------------------------------' + '\n')

const str = 'Quem com Ferro fere, com Ferro sera ferido';
console.log(transformString(str, uppercaseVowels))
console.log(transformString(str, uppercaseConsonants))
console.log(transformString(str, lowercaseVowels))
console.log(transformString(str, lowercaseConsonants))


console.log('\n' + '---------------------------------------------------------' + '\n')

testaMatriz()
