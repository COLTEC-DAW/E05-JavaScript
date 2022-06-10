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
    document.write("palindromo foda, parabens!!", '<br/>');
} else { document.write("que palindromo RUIM!", '<br/>'); }
document.write('<br/>');
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
    document.write("os dois sao iguais :D " + menor);
} else {
document.write("o menor numero é " + menor);
}
document.write('<br/>');
if (a == b)
{
    document.write("os dois sao iguais :D " + maior);
} else {
document.write("o maior numero é " + maior);
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
    document.write(numDiv2 +" eh divisivel");
} else {document.write(numDiv2 +" nao eh divisivel")}


if (mod(a, b)==true)
{
    document.write(numDiv2 +" eh divisivel");
} else {document.write(numDiv2 +" nao eh divisivel")}
//_____________________________//
//______CONTANDO_CARACTERE_____//

var frase = {"arara"}
var Char;

function countChar(frase, c)
{
    var con = 0, i = 0;
    for (;i<frase.length;i++)
    {
        if(frase[i] == c)
        {
            count++;
        }
    }
    console.log(c, "aparece", count "vezes");
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
    for(;i>10;i++)
    {
        array.push(i+1);
    }
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
//____TRABALHANDO COM LISTAS___//

