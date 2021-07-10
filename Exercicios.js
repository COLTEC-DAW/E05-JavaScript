// Desenhando Triangulo

function triangulo(nLinhas){
    for(var i=1;i<=nLinhas;i++){
        var aux = "";
        for(var j=0; j<i; j++){
            aux += "#";
        }
        console.log(aux);
    }
}

// Tabuleiro de Xadrez

function xadrez (num){

    for (var i = 0; i < num; i++){

        for(var j = 0; j < num; j++){
            if (j % 2 == i % 2) {
                console.log("#");
            }
            else {
                console.log("");
            }
        }
        console.log('\n');
    }
}

// Verificando Palíndromos

function Palindromo(num) {
    var ehPalindromo = true;
    var Num;
    Num = num.replace(/\s+/g, '').split('');

    for (var i = 0, j = (Num.length - 1); i < Num.length; i++, j--) {
        if (Num[i] != Num[j]) {
            ehPalindromo = false;
            break;
        }
    }

    return ehPalindromo;
}

// Um programa diferente ...

function ContadorDiferenciado() {
    for (var i = 0; i < 100; i++) {
      if (i % 3 == 0 && i % 5 != 0) {
        console.log("Fizz");
      } else if (i % 5 == 0 && i % 3 != 0) {
        console.log("Buzz");
      } else if (i % 5 == 0 && i % 3 == 0) {
        console.log("FizzBuzz");
      } else {
        console.log(i);
      }
    }
  }
  
// Mínimo e Máximo

function min(num1,num2){
    return ((num1<num2) ? num1:num2);
}
function max(num1,num2){
    return ((num1>num2) ? num1:num2);
} 

// Recursividade

function module2(num){
    return mod(num,2);
 }
 function mod(num, mod){
     return (num % mod == 0) ? true:false;
 }

 // Contador de caracteres

 function countChars(frase, c){

    var aux = 0;
    for(i = 0; i < frase.length; i++){
        if(frase[i] === c){
            aux++
        }
    }
    return aux;
}

// Trabalhando com intervalos

function Intervalo(min,max){
    var array = [];

    for(var i=min;i<=max;i++) array.push(i);

    return array;
}
function Intervalo(min,max,i){
    var array = [];

    for(var j=min;j<=max;j+=i) array.push(j);

    return array;
}

// Revertendo um array

function ContrarioArray(array){

    var revertido = [];

    for (var i in array){
        revertido.push(array[(array.length - 1 - i)]);
    }
    return revertido;
}

// Trabalhando com listas

function toList(array){
    for(var i = 0; i < array.length; i++){
        var list = {
            value: array[i],
            rest: list,
        }
    }
    return list;
}

// DeepEquals

function deepEquals(objeto1,objeto2){

    var equal;

    for(var i in objeto1){
        equal = true;
        for(var j in objeto2){
            equal = false;
            if(i==j){
                equal = true;
                break;
            }
        }
        if(!equal)break;
    }
    return equal;
}

