
function DesenhaTriangulo(){
  var altura = prompt("Digite a altura do Triangulo:");
  for (var i = 0; i<= altura; i++){
      for(var j = 0; j <= i; j++){
         console.log("#");
      }
      console.log("\n");
  }
}
DesenhaTriangulo();


function Tabuleiro(){
    var linhas = prompt("Digite a quantidade de linhas do tabuleiro:");
   for(var i=0; i< linhas; i++){
     console.log("# # # #");
    console.log("\n");
    }
   }
Tabuleiro();

function EhPalindromo(){
    var word = prompt("Digite uma palavra ou uma frase para verificar se eh um palindromo");
    word = word.toUpperCase();
    word = word.split('').join('');

    var InvertidaWord = word.split('').reverse().join('');

    if (word == InvertidaWord){
        console.log("Eh um palindrmo");
    }
    else{
        console.log("Nao eh um palindromo");
    }
}
EhPalindromo();

function max(a,b){
    if(a > b){
        return a;
       }else if(a < b){
        return b;
       }else if (a == b){
         return 0;
       }

}

// maior e menor elemento
function min(a,b){
    if(a < b){
        return a;
       }else if(b < a){
        return b;
       }else if (a == b){
         return 0;
       }

}

var x = prompt("Digite o valor de A");
var y = prompt("Digite o valor de B");

var maiorElemento = max(x,y);
var menorElemento = min(x,y);
if (menorElemento != 0){
console.log(`O menor é: ${menorElemento}`);
console.log(`O menor é: ${maiorElemento}`);
}

//Recursividade
function mod2(number){
    if (num % 2 == 0){
        return true;
    }
    return false;
}
function mod(num, mod){
    if(num % mod == 0){
        return true;
    }
    return false;
}
var numberA = prompt("Digite um numero para saber se ele eh divisivel por 2");
var numberB = prompt("Digite um numero para ser o dividendo");
var numberC = prompt("Digite um numero para ser o divisor");

var ehDivisivelpor2 = mod2(numberA);
console.log(ehDivisivelpor2);

var DivisaoExata = mod(numberB,numberC);
console.log(DivisaoExata);
if(DivisaoExata){
    console.log(`${numberB} eh divisivel por ${numberC}`);
}else{
    console.log(`${numberB} nao eh divisivel por ${numberC}`);
}

//Contagem de Caracteres

function countChars(frase, c){
    frase = frase.split('').join('');
    frase = frase.split('');
    var cont = 0;
    var tam = frase.length;
    for(var i = 0; i <tam; i++){
        if(frase[i]== c){
            cont += 1;
        }
    }
   console.log(`Apareceu` + cont + `o caractere`+ c + `na frase`);
}
var fraseUser = prompt("Insira uma frase 1ue deseja ver a quantidade de determinado caracter existente nela");
var caracter = prompt("Insira o caractere")
countChars(fraseUser,caracter);

//trabalhando com intervalos
function range(min,max,i){
    var vetor = [0];
    for(var x = min + 1; x < max; x += i){
        vetor[x-min-1]=x;
    }
    return vetor;
}
var minA = prompt("Digite o menor valor");
var maxA = prompt("Digite o maior valor");
var l = prompt("Digite o valor do vetor");
var Solucao = range(minA,maxA,l);
for (var x = 0; x < Solucao.length; x += l){
    console.log(`${Solucao[x]}`);
}

//revertendo um array
function reverseArray(array){
    return array.reverse();
}

var filmes = ['Bastardos Inglórios', 'The Wolf of Wall Street', 'Django Unchained', 'Marriage Story', 'Pieces of a Woman'];
var array = reverseArray(filmes);

console.log(`${array}`);

//trabalhando com listas

function toList(array){
    for (var j = 0; j < array.length; j++){
    var list = {
        value: array[i],
        rest: list,
      }
    }
      return list;
}

//DeepEquals
function deepEquals(obj1, obj2){
    if(JSON.stringify(obj1)==JSON.stringify(obj2)){
        return true;
    }else{
        return false;
    }
}
//Ordenação
function ordenacao(array, funcao){
    for (var i = 0; i < array.length; i++){
        for(var j = 0; j <(array.length-1);j++){
            var w = j + 1;
            if(funcao(array[j],array[w]) == true){
             var aux = array[j];
             array[j] = array[w];
             array[w] = aux;
            }
        }
        
    }
    return array;
}

var vetor = [10,5,80,95,17];
console.log(vetor);
//Decrescente
console.log(ordenacao(vetor,function(x,y){return x<y}))
//Crescente
console.log(ordenacao(vetor, function(x,y){return x>y}));
console.log(ordenacao(vetor,function(x,y){
    if((x % 2 == 0) && (y % 2 == 0)){
        return x < y;
    }
    else if((x % 2 !=0) && (y % 2 !=0)){
        return x > y;
    }
    else if(x % 2 == 0){
        return true;
    }
    else if(x % 2 != 0){
        return false;
    }
}));

//criptografia
function criptografia(frase,condicao){
    var array = frase.split('');
    var key = Math.floor(Math.random() * 27);
    for (var i = 0; i < array.length; i++){
        array[i] = condicao(array[i],key);
    }
    return(array.join(''));
}
function CrifDeCesar(caractere, key){
   if(caractere.charCodeAt(0) != 32){
       if(caractere.toUpperCase().charCodeAt(0)+key<=90){
        return String.fromCharCode(caractere.charCodeAt(0)+key);
       }
       return String.fromCharCode(caractere.charCodeAt(0)+key-26);

   }
   return caractere;
}

fraseA = `Joga de Ladinho`;
console.log(`texto cripitografado: ${criptografia(fraseA,CrifDeCesar)}`);

//Verificando um número
function checar(numero,condicao){
    return condicao(numero);
}

function ehImpar(numero){
    return(numero % 2 !=0);
}
function ehPar(numero){
    return(numero % 2 == 0);
}
function ehPrimo(numero){
    var contador;
    for(var j = 2; j < numero; j++){
        if(numero % i == 0){
           //se o contador for diferente de zero o numero nao eh primo
            contador++;
            break;
        }
    }
    return(contador == 0)
}

console.log(checar(17,ehPrimo) ? "O numero eh primo" : "O numero nao eh impar");
console.log(checar(12,ehPar) ? "O numero eh par" : "O numero nao eh par");
console.log(checar(5,ehImpar) ? "O numero eh impar" : "O numero nao eh impar");


//Transfromando Strings
function  TransfromandoStrings(fraseA,condicao){
    var array = fraseA.split('');
    for(var i = 0; i < array.length; i++){
        array[i] = condicao(array[i])
    }
    return array.join('');
}

const Vogais = ['A','E','I','O','U','A','E','I','O','U'];
function ConsoanteMaiuscula(Letra){
    if(Vogais.includes(Letra) != true){
        return Letra.toUpperCase();
    }
    return Letra;
}
function VogalMaiuscula(Letra){
    if(Vogais.includes(Letra) == true){
        return Letra.toUpperCase();
    }
    return Letra;
}

function ConsoanteMinuscula(Letra){
    if(Vogais.includes(Letra) != true){
        return Letra.toLowerCase();
    }
    return Letra;
}

function VogalMinuscula(Letra){
    if(Vogais.includes(Letra) == true){
        return Letra.toLowerCase();
    }
    return Letra;
}

var fraseA = (`Joga de Ladinho`);
console.log(`A frase original eh: ${fraseA}\n`);
var fraseB = TransfromandoStrings(fraseA, VogalMaiuscula);
var fraseC = TransfromandoStrings(fraseA, ConsoanteMaiuscula);
var fraseD = TransfromandoStrings(fraseA, VogalMinuscula);
var fraseE = TransfromandoStrings(fraseA, ConsoanteMinuscula);
console.log(`Vogais Maiusculas: ${fraseB}`);
console.log(`Consoantes Maiusculas: ${fraseC}`);
console.log(`Vogais minusculas ${fraseD}`);
console.log(`Consoantes minusculas: ${fraseE}`);


//Funções Matriciais
function newMatriz(colunas, FuncaoMatricial){
    var matriz = [];
    for (var i = 0; i < colunas; i++){
        var linha = [];
        for (var j = 0; j < colunas; j++){
            linhas.push(FuncaoMatricial(i,j));
        }
        matriz.push(linha);
    }
    return matriz;
}

console.log(newMatriz(2,function(i,j){
    return i + j;
}));

console.log(newMatriz(3,function(i,j){
    return i * j;
}));

console.log(newMatriz(4,function(i,j){
    return i == j ? 1 : 0;
}));

console.log(newMatriz(5,function(i,j){
    return i^2/(j+1);
}));
console.log(newMatriz(6,function(i,j){
    return i > j ? 1 : (i<j ? 5 : 0);
}));



