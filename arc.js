//_____________________________//
//___DESENHANDO_UM_TRIANGULO___//

var neymar = prompt("digite o numero de linhas");
var triangulo = '';

if (neymar > 0) {
    var i = 0;
    for (; i <= neymar; i++) {
        var aux = 0;
        for (; aux < i; aux++) {
            triangulo += '#';
        }
    }
}
console.log(triangulo);

//_____________________________//
//_____TABULEIRO_DE_XADREZ_____//

var hulk = prompt("digite o numero de linhas!");

if (hulk > 0) {
    var i = 0;
    for (; i < hulk; i++) {
        if (i & 1) {
            console.log("  #  #  #  #")
        } else {
            console.log("#  #  #  #  ");
        }
    }
}
//_____________________________//
//_________PALINDROMO__________//

function palindrome(pal) {
    var re = /[^A-Za-z0-9]/g;
    pal = pal.toLowerCase().replace(re, '');
    var len = pal.length;
    for (var i = 0; i < len / 2; i++) {
        if (pal[i] !== pal[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

var matue = prompt("Digite um palindromo! :D");

if (palindrome(matue) == true) {
    console.log("palindromo incrivel, parabens!!");
}
//_____________________________//
//________DIVIDE_5_e_3_________//

function div3(num) {
    if ((num % 3) == 0) { return true; }
}

function div5(num) {
    if ((num % 5) == 0) { return true; }
}

var teto = prompt("digite um numero qualquer");

var i = 1;
for (; i < 101; i++) {
    if (i !== 0 & div5(i) & div3(i) == true) {
        console.log(i + " FizzBuzz");
    } else if (div3(i) == true) {
        console.log(i + " Fizz");
    } else if (div5(i) == true) {
        console.log(i + " Buzz");
    } else { console.log(i); }
}
//_____________________________//
//_______MINIMO_E_MAXIMO_______//

var a = 10;
var b = prompt("digite um valor a ser comparado com A");

function min(a,b)
{
    if(a>b)
    {
        return b;
    } else {
        return a;
    } 
}

function max(a, b)
{
    if(a>b)
    {
        return a;
    } else {
        return b;
    }
}

var menor = min(a,b);
var maior = max(a,b);

if (a == b)
{
    console.log("os dois sao iguais :D " + menor);
} else {
console.log("o menor numero é " + menor);
}
console.log('<br/>');
if (a == b)
{
    console.log("os dois sao iguais :D " + maior);
} else {
    console.log("o maior numero é " + maior);
}

//_____________________________//
//________RECURSIVIDADE________//

function mod2(num)
{
    if ((num % 2) == 0)
    {
        return true;
    } else {
        return false;
    }
}

function mod(num, mod)
{
    if((num % mod) == 0)
    {
        return true;
    } else {
        return false
    }
}

var numDiv2 = prompt("Digite um numero!");

if (mod2(numDiv2)==true)
{
    console.log(numDiv2 +" eh divisivel");
} else {console.log(numDiv2 +" nao eh divisivel");}


if (mod(a, b)==true)
{
    console.log(numDiv2 +" eh divisivel");
} else {console.log(numDiv2 +" nao eh divisivel");}
//_____________________________//
//______CONTANDO_CARACTERE_____//

var frase = "arara";
var Char;

function countChar(frase, c)
{
    var count = 0;
    var i = 0;
    for (;i<frase.length;i++)
    {
        if(frase[i] == c)
        {
            count++;
        }
    }
    console.log(c, "aparece", count, "vezes");
}

countChar(frase, Char);
//_____________________________//
//_TRABALHANDO_COM_INTERVALOS__//

function range(min, max)
{
    var array=[];
    if(min < max)
    {
        var i=min;
        for(;i<max;i++)
        {
            array.push(i);
        }
    }
}

function range2(min, max, j)
{
    var array=[];
    if(min < max)
    {
        var i=min;
        for(;i<max;i+=j)
        {
            array.push(i);
        }
    }
}

var numAle1 = prompt("Digite um numero");
var numAle2 = prompt("DIgite um numero");

var aux01 = 8;

range(numAle1, numAle2);
range2(numAle1, numAle2, aux01);
//_____________________________//
//_____INVERTENDO_UM_ARRAY_____//

function EnchArray (aux)
{
    var i=0;
    var array1 = [];
    for(;i>10;i++)
    {
        array1.push(i+1);
    }
    return array1;
}

function reverseArray(array)
{
    var aux2 = [];
    var i=array.length-1;
    for (;i >= 0; i--){aux2.push(array[i])}
    return aux2;
}

var array = [];
var arrayRev = [];

array = EnchArray(10);
arrayRev = EnchArray(10);

console.log(array);

arrayRev = reverseArray(array);
console.log(array);
//_____________________________//
//____TRABALHANDO_COM_LISTAS___//

function list(array)
{
    var lista ={};
    var i=0;
    for(; i<array.length;i++)
    {
        var objet = {};
        objet.value = array[i];
        objet.rest = lista;
        lista = objet;
    }
    return lista;
}

var array2 = EnchArray(10);
console.log(list(array));
//_____________________________//
//_________DEEP_EQUALS_________//

function DeepEqual(obj1,obj2)
{
    return(obj1 == obj2);
}

var obj1 = {num : 10,};
var obj2 = obj1;
var obj3 = {num : obj1.num,};

console.log(DeepEqual(obj1,obj2));
console.log(DeepEqual(obj1,obj3));
console.log(DeepEqual(obj2,obj3));
//_____________________________//
//__________ORDENAÇÃO__________//

function crescente(num,num2){return(num>num2);};
function decrescente(num,num2){return(num<num2);}
function decrescentePar(num,num2){return((num>num2)&&(num%2==0));}
function crescenteImpar(num,num2){return((num>num2)&&(a%2==0));}

function ordena(array, mod)
{
    var tam = array.length;
    var i=0;
    for(;i<tam;i++)
    {
        var j=0;
        for(;j<tam;j++)
        {
            if(mod(array[j],array[j+1]))
            {
                let temp = array[j];
                array[j] = array[j +1];
                array[j+1] = temp;
            }
        }
    }
    console.log(array);
}

function enchDec (array)
{
    var i=100;
    for(;i>=0;i--)
    {
        array.push(i);
    }
    return array;
}

var array3 = [];
array3 = enchDec(array3);
//_____________________________//
//_________CRIPTOGRAFIA________//

function PosFINAL (car, des)
{
    var alfa=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var aux;
    var i=0;
    for(;i<26;i++)
    {
        if(char==alfa[i])
        {
            aux = i;
        }
    }
    var max= 25 - des;
    if(aux>max)
    {
        aux = (des-(25-aux));
    }else{
        aux+=3;
    }
    return alfa[aux];
}

function cripto (str, des)
{
    var str2 = [];
    var car;
    var i=0;
    for(;str.length;i++)
    {
        car = PosFINAL (str[i], des);
        str2.push(car);
    }
    str2 = str2.concat();
    console.log(str2);
}

var string = "Neymar";
var des = 3;

cripto(string,des);
//_____________________________//
//____VERIFICANDO_UM NUMERO____//

function caixaAltaVogal (car)
{
    car.toLowerCase();
    if(car == "a" || car == "e" || car == "i" || car == "o" || car == "u")
    {
        car = car.toUpperCase();
    }
    return car;
}

function caixaAltaCon (car)
{
    char.toLowerCase();
    if(car != "a" && car != "e" && car != "i" && car != "o" && car != "u")
    {
        car = car.toUpperCase();
    }
    return car;
}

function caixaBaixaVogal (car)
{
    car = car.toUpperCase();
    if(car == "a" || car == "e" || car == "i" || car == "o" || car == "u")
    {
        car.toLowerCase();
    }
    return car;
}

function caixaBaixaCon (car)
{
    char.toUpperCase();
    if(car != "a" && car != "e" && car != "i" && car != "o" && car != "u")
    {
        car = car.toLowerCase();
    }
    return car;
}

function TraStr(str, mod)
{
    var str2= "";
    var aux;
    var i=0;
    for(;i<str.length;i++)
    {
        aux=mod(str[i]);
        str2 += aux;
    }
    console.log(str2);
}

TraStr("MATUE", caixaBaixaCon);
//_____________________________//
//_____FUNCOES_MATRICIAIS______//

function soma(num,num2)
{
    num = parseInt(num);
    num2 = parseInt(num2);
    return num + num2;
}
function mult(num,num2){
    num = parseInt(num);
    num2 = parseInt(num2);
    return num * num2;
}
function igual(num,num2){
    num = parseInt(num);
    num2 = parseInt(num2);
    return num == num2 ? 1 : 0;
}
function equa1(num,num2){
    num = parseInt(num);
    num2 = parseInt(num2);
    return num^2/(num2+1);
}
function equa2(num,num2){
    num = parseInt(num);
    num2 = parseInt(num2);
    return num > num ? 1 : (num < num ? 5 : 0);
}

function Cmatriz(tam, mod){   
    var matriz = [];
    var array = [];
    for(var i = 0;i<tama;i++){
        for(var j = 0;j<tam;j++){
            array.push(mod(i,j));
        }
        matriz.push(array);
        var array = [];
    }
    return matriz;
}

console.log(Cmatriz(5,soma));
console.log(Cmatriz(5,equa2));
//_____________________________//
//_____________________________//