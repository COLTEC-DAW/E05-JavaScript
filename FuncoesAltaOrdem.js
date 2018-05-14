/**
 * Ordenar um array,
 */
function ordenacao(array, criterio) {
    for (var i=0;i<array.length;i++) {
        for (var j=0;j<array.length-1;j++) {
            if (criterio(array[j],array[j+1])) {
                var aux = array[j];
                array[j] = array[j+1];
                array[j+1] = aux;            
            }
        }
    }
    return array.join(", ");
}

/*Variavel crescente - Parametros: array e uma funcao que retorna verdadeiro se o numero atual eh maior que o proximo*/
var crescente = ordenacao([5,1,3,8,2,4,7,9,0,6], function(atual,prox) {
    return atual > prox;
});

/*Variavel decrescente - Parametros: array e uma funcao que retorna verdadeiro se o numero atual eh menor que o proximo*/
var decrescente = ordenacao([5,1,3,8,2,4,7,9,0,6], function(atual, prox) {
    return atual < prox;
});

/*Variavel recebe crescente impar*/
var crescenteImpar = ordenacao([5,1,3,8,2,4,7,9,0,6], function(atual, prox) {
    if((atual % 2 != 0 && prox % 2 != 0) || (atual % 2 == 0 && prox % 2 == 0)) {
        return atual > prox;
    }
    if(atual % 2 != 0) {
        return false;
    }
    if(prox % 2 != 0) {
        return true;
    }
});
/*Variavel recebe decrescente par*/
var decrescentePar = ordenacao([5,1,3,8,2,4,7,9,0,6], function(atual,prox) {
    if((atual % 2 != 0 && prox % 2 != 0) || (atual % 2 == 0 && prox % 2 == 0)) {
        return atual < prox;
    }
    if(atual % 2 == 0) {
        return false;
    }
    if(prox % 2 == 0) {
        return true;
    }

});

/*mostrar ordenacao de cada criterio*/
console.log("Crescente: " + crescente);
console.log("Decrescente: " + decrescente);
console.log("Crescente Impar: " + crescenteImpar);
console.log("Decrescente Par: " + decrescentePar);







/**
 * Funcao que criptografa uma string, com o criterio enviado por parametro
 */

function criptografia(string, criterio) {
    textoCriptografado = "";
    chave = prompt("Digite o valor da chave: ");
    chave = parseInt(chave); //transformar o valor da chave em inteiro
    textoCriptografado = criterio(string,chave); //variavel texto criptografado recebe o criterio
    return console.log(textoCriptografado);
}
var string = prompt("Digite um texto: ");
criptografia(string, function(string, chave){
    var char = 0;
    var stringCriptografada = "";
    for (var i=0;i<string.length;i++) {
        char = string.charCodeAt(i);
        char = char + chave;
        stringCriptografada = stringCriptografada + String.fromCharCode(char); //string criptografada rece ela mesma mais o char(o char esta em unicod(int) e esta sendo convertido para char)
    }
    return stringCriptografada;  //retornar string criptografada
});






/**
 * Funcao que verifica um numero com uma condicao(parametro), retornando true or false 
 */

function verificar(num, condicao) {
    if (condicao(num)){
        return true;
    }
    else {
        return false;
    }
}
num = prompt("Digite um numero: ");

/*variavel impar recebe funcao Verificar se o numero eh impar (parametros: num e funcao que verifica)*/
impar = verificar(num,function(num) {
    if (num % 2 != 0) {return true}
    else {return false}
});

/*Variavel primo recebe funcao Verificar se um numero eh primo*/
primo = verificar(num,function(num) {
    if(num!=1){
        for (var i = 2; i < num; i++)
            if (num % i == 0) return false;
        return num;
    }
});


/*Mostrar os resultados*/
console.log("Impar: " + impar);
console.log("Primo: " + primo);






/**
 * funcao que recebe uma string e um criterio como parametro. A funcao transforma a string em outra, de acordo com o criterio
 */

function transformar(string, transformChar) {
    textoTransformado = "";
    for(var i = 0; i<string.length; i++) {
        textoTransformado = textoTransformado + transformChar(string[i]);
    }

    return textoTransformado;
}
var string = prompt("Digite um texto: ");

/*Caixa alta vogal*/
var caixaAltaVogal = transformar(string, function(char) {
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
        return char = char.toUpperCase();
    }
    else {return char;}
});
/*Caixa alta nas consoantes*/
var caixaAltaConsoante = transformar(string, function(char) {
    if (char != "a" && char != "e" && char != "i" && char != "o" && char != "u") {
        return char = char.toUpperCase();
    }
    else {return char;}
});
/*Caixa baixa vogal*/
var caixaBaixaVogal = transformar(string, function(char) {
    if (char == "A" || char == "E" || char == "I" || char == "O" || char == "U") {
        return char = char.toLowerCase();
    }
    else {return char;}
});
/*Caixa baixa nas consoantes*/
var caixaBaixaConsoante = transformar(string, function(char) {
    if (char != "A" && char != "E" && char != "I" && char != "O" && char != "U") {
        return char = char.toLowerCase();
    }
    else {return char;}
});
/*Mostrar textos transformados*/
console.log(caixaAltaVogal);
console.log(caixaAltaConsoante);
console.log(caixaBaixaVogal);
console.log(caixaBaixaConsoante);








/*Funcao matricial*/
function criarMatriz(tamanho, criterio) {
    var matrizAux = [];
    for(var i = 0; i < tam; i++) {
        matrizAux[i] = [];
        for(var j = 0; j < tam; j++) {
            matrizAux[i][j] = (criterio(i, j));
        }
    }
    return matrizAux;
}

var tam = prompt("Digite o tamanho: ");
tam = parseInt(tam); //transformar o valor do tam em inteiro

/*Var1 recebe a soma das matrizes*/
var1 = criarMatriz(tam, function(i,j) {
    return i + j;
});

/*var2 recebe a multiplicacao das matrizes*/
var2 = criarMatriz(tam, function(i,j) {
    return i * j;
});

/*var3 recebe se uma matriz de identidade. Sim, eu lembro de te estudado isso no 2 ano em matematica!*/
var3 = criarMatriz(tam, function(i,j) {
    return i == j ? 1 : 0;
});

/*var4 recebe se uma matriz esquisita*/
var4 = criarMatriz(tam, function(i,j) {
    return i*i/(j+1);   //obs: em vez de usar i^2 eu usei i*i
});

/*var5 recebe se uma matriz esquisita*/
var5 = criarMatriz(tam, function(i,j) {
    return i > j ? 1 : (i < j ? 5 : 0);
});

console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4);
console.log(var5);
