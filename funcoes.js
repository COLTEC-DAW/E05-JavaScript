/*  Mínimo e Máximo */
var max = function(a, b){
    if(a>b){
        return a;
    }else{
        return b;
    }
}

var min = function (a, b){
    if (a<b){
        return a;
    }else{
        return b;
    }
}

/* Recursividade (?) */
var mod2 = function (number){
    if (number%2 == 0){
        return true;
    }else{
        return false;
    }
}

var mod = function (number, mod){
    if (number%mod == 0){
        return true;
    }else{
        return false;
    }
}

/* Contando caracteres */

var contChar = function (frase, char){
    var vezes = 0;
    for (let i=0; i<frase.length; i++){
        if (frase.charAt(i) == char){
            vezes++;
        }
    }
    console.log(char + " aparece " + vezes + " vezes");    
}

/* Testando máximo e mínimo */
a = prompt("Digite um número");
b = prompt("Digite outro número");

console.log("Maior Valor: " + max(a, b));
console.log("Menor Valor: " + min(a, b));


/* Testando recursividade */ 
console.log("3 é divisível por 2? " + mod2(3));
console.log("10 é divisível por 2? " + mod(10, 2));
console.log("10 é divisível por 3? " + mod(10, 3));

/* Testando contagem de caracteres */ 
var frase = prompt("Digite uma frase");
var char = prompt("Digite um caractere").charAt(0);
contChar(frase, char);