//_____________________________//
//___DESENHANDO_UM_TRIANGULO___//

var neymar = prompt("digite o número de linhas");

if (neymar > 0) {
    var i = 0;
    for (; i <= neymar; i++) {
        var aux = 0;
        for (; aux < i; aux++) {
            //console.log("< - numero de hashtags!");
            document.write(" # ");
        }
        document.write('<br/>');
    }
}
document.write('<br/>');
//_____________________________//
//_____TABULEIRO_DE_XADREZ_____//

var hulk = prompt("digite o número de linhas!");

if (hulk > 0) {
    var i = 0;
    for (; i < hulk; i++) {
        if (i & 1) {
            document.write("&nbsp;# # # #");
            document.write('<br/>');
        } else {
            document.write("# # # #");
            document.write('<br/>');
        }
    }
}
document.write('<br/>');
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

var matue = prompt("Digite um palíndromo! :D");

if (palindrome(matue) == true) {
    document.write("palíndromo foda, parabéns!!", '<br/>');
} else { document.write("que palíndromo RUIM!", '<br/>'); }
document.write('<br/>');
//_____________________________//
//________DIVIDE_5_e_3_________//

function div3(num) {
    if ((num % 3) == 0) { return true; }
}

function div5(num) {
    if ((num % 5) == 0) { return true; }
}
/*
var teto = prompt("digite um numero qualquer");

if (div3(teto) == true) {
    document.write("FIZZ");
} else { document.write("no fizz :C"); }

document.write('<br/>');

if (div5(teto) == true) {
    document.write("BUZZ");
} else { document.write("no buzz :C"); }
*/
var i = 1;
for (; i < 101; i++) {
    if (i !== 0 & div5(i) & div3(i) == true) {
        document.write(i + " FizzBuzz", '<br/>');
    } else if (div3(i) == true) {
        document.write(i + " Fizz", '<br/>');
    } else if (div5(i) == true) {
        document.write(i + " Buzz", '<br/>');
    } else { document.write(i + '<br/>'); }
}