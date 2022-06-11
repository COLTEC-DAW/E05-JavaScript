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