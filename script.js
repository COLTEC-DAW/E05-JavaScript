function atv1 (num){
    for (let index = 1; index < num; index++) {
        var b=[];
        for (let jindex = 0; jindex < index; jindex++) {
            b.push('#')
        }
        console.log(b.join(' '));
    }
};
//atv1(prompt("Digite N para atividade 1"));

function atv2 (num){
    for (let index = 1; index < num; index++) {
        var b=[];
        for (let jindex = 0; jindex < num; jindex++) {
            if(index%2==0 && jindex%2==0 || index%2!=0 && jindex%2!=0)b.push('#');
            else if(index%2==0 && jindex%2!=0 || index%2!=0 && jindex%2==0)b.push(' ');
            
        }
        console.log(b.join(' '));
    }
};
//atv2(prompt("Digite N para atividade 2"));

//função que copiei pra remover acentos a baixo
// Example: https://codepen.io/marcelo-ribeiro/pen/OJmVOyW

const accentsMap = new Map([
    ["A", "Á|À|Ã|Â|Ä"],
    ["a", "á|à|ã|â|ä"],
    ["E", "É|È|Ê|Ë"],
    ["e", "é|è|ê|ë"],
    ["I", "Í|Ì|Î|Ï"],
    ["i", "í|ì|î|ï"],
    ["O", "Ó|Ò|Ô|Õ|Ö"],
    ["o", "ó|ò|ô|õ|ö"],
    ["U", "Ú|Ù|Û|Ü"],
    ["u", "ú|ù|û|ü"],
    ["C", "Ç"],
    ["c", "ç"],
    ["N", "Ñ"],
    ["n", "ñ"]
  ]);
  
  const reducer = (acc, [key]) => acc.replace(new RegExp(accentsMap.get(key), "g"), key);
  
  const removeAccents = (text) => [...accentsMap].reduce(reducer, text);

  const slugify = text => text
  .replaceAll(/\s|_|\(|\)/g, "-")
  .normalize("NFD").replaceAll(/\p{Diacritic}/gu, "")
  .toLowerCase()
  /*
  const accentsMap = new Map([
    ["-", "\\s|_"],
    ["a", "á|à|ã|â|ä"],
    ["e", "é|è|ê|ë"],
    ["i", "í|ì|î|ï"],
    ["o", "ó|ò|ô|õ|ö"],
    ["u", "ú|ù|û|ü"],
    ["c", "ç"],
    ["n", "ñ"]
  ]);
  
  const reducer = (acc, [key]) => acc.replace(new RegExp(accentsMap.get(key), "gi"), key);
  
  const slugify = (text) => [...accentsMap].reduce(reducer, text.toLowerCase());
  *////////
function epalindromo(s)
{
    s=s.normalize("NFD").replace(/\p{Diacritic}/gu, "")
    s=s.toLowerCase();
    s=s.replaceAll(' ', '');
    s=s.replaceAll(',', '');
    s=s.replaceAll('/', '');
    s=s.replaceAll('.', '');
    s=s.replaceAll('-', '');
    s=s.replaceAll('?', '');
    s=s.replaceAll('!', '');
    
    var j = 0;
    for (var i = (s.length - 1); i >= 0 && j < s.length && i >= j; i--, j++)
    {
        if (s[i] != s[j]) return false;
    }
    return true;
}

//console.log(epalindromo(prompt("Digite o texto para sabem se é palíndromo")));

//Escreva um programa que utilize a função console.log para imprimir números de 1 a 100, com duas exceções:
//Para números divsíveis por 3: Imprimir Fizz Para números divisíveis por 5: Imprimir Buzz Para números divisíveis por 3 e 5:
//mprimir FizzBuzz
function atv4(){
    for (var i = 1; i <= 100; i++)
    {
        if (i%3===0 && i%5===0) console.log("FizzBuzz");
        else if (i%3===0) console.log("Fizz");
        else if (i%5===0) console.log("Buzz");
        else console.log(i);
    }
}
//atv4();

//JavaScript: Funções

function min(a,b){
    if(a>b) return b;
    return a;
}
function max(a,b){
    if(a<b) return b;
    return a;
}

function mod2(number){
    return (number%2==00);
}
function mod(num, mod){
    return (num%mod==00);
}

function countChars(frase, c){
    var valor=0;
    for (let index = 0; index < frase.length; index++) {
        if(frase[index]===c)valor++;
    }
    return valor;
}
//JavaScript: Objetos & Arrays

function range(min, max, i){
    if(min>max){
        var a=max;
        max=min;
        min=a;
    }
    for (let index = min; index <=max; index+=i) {
        console.log(index);        
    }
}
//range(400, 76, 3);
function reverseArray(array){
    
    var arrayR=[];
    for (let index=(array.length-1); index >=0 ; index--) {
        arrayR.push(array[index]);
    }
    return arrayR.join('');
}
//console.log(reverseArray("Add a new item to an array:"));

function toList(array){
    for(var i = 0; i < array.length; i++){
        var list = {
            value: array[i],
            rest: list,
        }
    }
    return list;
}
//var array = {"olá", "tudo bem", "com", "vc"};
//console.log(toLista(array));
function deepEquals(obj1,obj2){
    var igual;

    for(var i in obj1){
        igual = true;
        for(var j in obj2){
            igual = false;
            if(i==j){
                igual = true;
                break;
            }
        }
        if(!igual)break;
    }

    return igual;
}

//JavaScript: Funções de Alta Ordem
//ordenação crescente, descrente,
//crescente ímpares, decrescente pares.
function crescente(a, b){
    return (a > b);
}

function decrescente(a, b){
    return (a < b);
}

function crescenteImpar(a, b){
    return ((a > b) && (a%2 !== 0));
}

function decrescentePar(a, b){
    return ((a < b) && (a%2 === 0));
}

function bubbleSort(array, compara){
    for(var i = 0; i < array.length; i++){
        for( var j = 0; j < array.length; j++){
            if(compara(array[j], array[j + 1])){
                var tmp = array[j];
                array[j] = array [j + 1];
                array[j + 1] = tmp;
            }
        }
    }
    return array;
}
/*var array = [4, 14, 23, 232, 234, 25, 569, 52, 14, 963, 02, 10];
bubbleSort(array, decrescente);
console.log(array);*/

function cifraDeCesar(letra){
    var cripto = " ";
    var ascii=letra.charCodeAt(0);
      if(letra != "!" && letra != " " && letra != "." && letra != "?"){
        if(letra == 'z') return ('a');
        else if (letra == 'Z')  return ('A');
        else if (ascii>=65 && ascii<=89 || ascii>=97 && ascii<=121  )return (String.fromCharCode(ascii + 1));
      }else{
        return letra;
      }
  }

function encriptografar(str, criterio){
    var segredo="";
    for(var i = 0; i < str.length; i++){
        segredo+=criterio(str[i]);
    }
    return segredo;
}

//console.log(encriptografar("oiiiiiiiiii tudo bem com vocs", cifraDeCesar));

function eimpar(num){
    return (num%2!=0)
}
function epar(num){
    return (num%2==0)
}
function verifica (num, criterio){
    return criterio(num);
}
//Transformações em uma String

function vogalAlta(letra){
    var cripto = " ";
    var ascii=letra.charCodeAt(0);
    if(letra==='a'||letra==='e'|| letra==='i'|| letra==='o'||letra==='u') return (String.fromCharCode(ascii - 32));
    return letra;
}
function vogalBaixa(letra){
    var cripto = " ";
    var ascii=letra.charCodeAt(0);
    if(letra==='A'||letra==='E'|| letra==='I'|| letra==='O'||letra==='U') return (String.fromCharCode(ascii + 32));
    return letra;
}
function consoanteBaixa(letra){
    var cripto = " ";
    var ascii=letra.charCodeAt(0);
    if(ascii>=65 && ascii<=90){
        if(letra!='A'&&letra!='E'&& letra!='I'&& letra!='O'&&letra!='U') return (String.fromCharCode(ascii + 32));
    }
    return letra;
}
function consoanteAlta(letra){
    var cripto = " ";
    var ascii=letra.charCodeAt(0);
    if(ascii>=97 && ascii<=122){
        if(letra!='a'&&letra!='e'&& letra!='i'&& letra!='o'&&letra!='u') return (String.fromCharCode(ascii - 32));
    }
    return letra;
}

function tranformar(str, criterio){
    var trans="";
    for(var i = 0; i < str.length; i++){
        trans+=criterio(str[i]);
    }
    return trans;
}

//console.log(tranformar("oiiiiiiiiii tudo bem com vocs", vogalAlta));

//funções Matriciais

function somaMatriz(i, j){
    return i + j;
}
function produtoMatriz(i, j) {
    return i * j;
}

function binarioMatriz(i, j) {
    return i == j ? 1 : 0;
}

function elevarMatriz(i, j) {
    return i ^ 2 / (j + 1);
}

function contaMatriz(i, j) {
    return i > j ? 1 : (i < j ? 5 : 0);
}

function funcaoMatricial(tam, calculo){
    var matriz = [];
    for(var i = 0; i < tam; i++) {
        matriz[i] = [];
        for(var j = 0; j < tam; j++) {
            matriz[i][j] = calculo(i, j);
        }
    }
    return matriz;
}

console.log(funcaoMatricial(5, somaMatriz));