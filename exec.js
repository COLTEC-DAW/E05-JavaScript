//Desenhando um triângulo
function imprimeTriangulo(n_linhas){
    for(var i = 1; i <= n_linhas; i++) {
      let linhas = '';
      for(var j = 1; j <= i+1; j++) {
        linhas += '#';
      }
      console.log(linhas);
    }
}

//Tabuleiro de Xadrez
function tabuleiroXadrez(n_linhas){
    for(var i = 0; i < n_linhas; i++){ 
        console.log("# # # #");
        console.log(" # # # #");
    }
}

//Verificando Palíndromos
function checaPalindromo(palavra){
    for(var i = 0; i < palavra.length/2; i++){
        if(palavra[i] != palavra[palavra.length - i - 1]) return false;
    }

    return true;
}

//Um programa diferente...
function imprimeSequencia(){
    for(var i = 1; i <= 100; i++){
        if(i % 3 == 0){
           console.log("Fizz");
           if(i % 5 == 0) console.log("FizzBuzz");
        }
        else if(i % 5 == 0) console.log("Buzz");
        else console.log(i);
        
   }
}

//Mínimo
function min(a, b){
  if(a <= b) return a;
  return b;
}

//Máximo
function max(a, b){
  if(a >= b) return a;
  return b;
}

//Divisão por 2
function mod2(number){
  if(number % 2 == 0) return true;
  return false;
}

//Divisão por outro número
function mod(num, div){
  if(num % div == 0) return true;
  return false;
}

//Contando caracteres
function countChar(frase, c){
  var count = 0;
  for(var i = 0; i < frase.length; i++){
    if(frase[i] == c) count++;
  }
  
  return count;
}

//Trabalhando com intervalos
function range(min, max, gap){
    var arr = [];
    for(var i = min; i <= max; i+=gap) arr[i-min] = i;
    
    return arr;
  }
  
//Revertendo um array
  function reverseArray(array){
    var aux;
    for(var i = 0; i < array.length/2; i++){
      aux = array[i];
      array[i] = array[array.length - i];
      array[array.length - i] = aux;
    }
    
    return array;
  }
  
  //Trabalhando com listas
  function toList(array){
      var list = [];
  
      for(var i = 0; i < array.length; i++){
          list.push("value: " + i + ", \nrest:");
      }
  
      return list;
  }
  
  //DeepEquals
  function deepEquals(obj1, obj2){
      if(obj1 === obj2) return true;
      return false;
  }


// Ordenação
function bubbleSort(array, order, test){
  for(var i = 0; i < array.length; i++){
      if(test(array[i])){
        array.splice(i,1);
      }
      else{
        for(var j = 0; j < array.length; j++){
          if(order(array[j], array[j + 1])){
              var tmp = array[j];
              array[j] = array [j + 1];
              array[j + 1] = tmp;
          }
        }
      }
  }
  return array;
}

//var array = [2311, 233, 31231, 14, 5202, 6, 2027, 228, 19, 110];
//var newArray = bubbleSort(array, (a, b) => (a > b), () => true);
//var newArray = bubbleSort(array, (a, b) => (a < b), () => true);
//var newArray = bubbleSort(array, (a, b) => (a > b), a => (a % 2 !== 1));
//var newArray = bubbleSort(array, (a, b) => (a < b), a => (a % 2 !== 0));
//console.log(newArray);

//Criptografia

function cifraDeCesar(caracter){
  var ascii=caracter.charCodeAt(0);
    if(caracter != "!" && caracter != " " && caracter != "." && caracter != "?"){
      if(caracter == 'z') return ('a');
      else if (caracter == 'Z')  return ('A');
      else if (ascii>=65 && ascii<=89 || ascii>=97 && ascii<=121  )return (String.fromCharCode(ascii + 1));
    }
    else {
      return caracter;
    }
}

function criptografa(string, criterio){
  newString = "";
  for(var i = 0; i < string.length; i++){
      newString += criterio(string[i]);
  }
  return newString;
}

//console.log(criptografa("teste", cifraDeCesar));

// Verificando um número 

function ePrimo(num){
  for(var i = 2; i < num; i++){
    if(num % i === 0) return false;
  }
  return true;
}

function TestandoUmNumero(num, teste){
  if(teste(num)) return true;
  return false;
}

//console.log(TestandoUmNumero(5, num => (num % 2 === 1)));
//console.log(TestandoUmNumero(5, ePrimo));

//Transformações em uma String

function VogaisA(caracter) {
  if ("aeiou".includes(caracter.toLowerCase())) {
      return caracter.toUpperCase();
  } else {
      return caracter;
  }
}

function ConsoantesA(caracter) {
  if (!("aeiou".includes(caracter.toLowerCase()))) {
      return caracter.toUpperCase();
  } else {
      return caracter;
  }
}

function VogaisB(caracter) {
  if ("aeiou".includes(caracter.toLowerCase())) {
      return caracter.toLowerCase();
  } else {
      return caracter;
  }
}

function ConsoantesB(caracter) {
  if (!("aeiou".includes(caracter.toLowerCase()))) {
      return caracter.toLowerCase();
  } else {
      return caracter;
  }
}

function stringTransformada(string, criterio) {
  var newString = "";

  for (var i = 0; i < string.length; i++) {
    newString += criterio(string[i]);
  }

  return newString;
}

//console.log(stringTransformada("Olha as consoantes em caixa alta!!!", ConsoantesA));

//Funções Matriciais


function soma (a, b){
  return a + b;
}

function multiplicacao (a, b){
  return a * b;
}

function binario (a,b){
  return a == b ? 1 : 0
}

function operacao (a,b){
  return a^2/(b+1)
}

function comparacaoIndices (a,b) {
  return a > b ? 1 : (a < b ? 5 : 0)
}

function matrizResultante(tamanho, criterio) {
  var matriz = [];
  for (var i = 0; i < tamanho; i++) {
      matriz[i] = [];
      for (var j = 0; j < tamanho; j++) {
          matriz[i][j] = criterio(i, j);
      }
  }
  return matriz;
}

//console.log(matrizResultante(5, comparacaoIndices));
//console.log(matrizResultante(5, binario));
//console.log(matrizResultante(5, operacao));
//console.log(matrizResultante(5, multiplicacao));
//console.log(matrizResultante(5, soma));


