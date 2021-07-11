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

