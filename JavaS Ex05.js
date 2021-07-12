/* Atividade Do Triangulo */
var triangulo = function(NLinhas){
    for (i = 1; i <= NLinhas; i++){
        var HashTag = "";
        for(var j = 1; j <= i; j++){
            HashTag += "#";
        }
        console.log(HashTag)
    }
}

var NLinhasT = prompt("Quantas Linhas deseja que o triangulo tenha? ");
triangulo(NLinhasT);


/* Tabuleiro De Xadrez */
var Xadrez = function(NLinhas){
    var HashTag = "# # # #";

    for (i = 0; i < NLinhas; i++){
        if(i % 2 == 0){
            console.log(HashTag);
        }
        else{
            console.log(" " + HashTag);
        }
    }
}

var NLinhasX = prompt("Quantas Linhas deseja que o tabuleiro de Xadrez tenha? ");
Xadrez(NLinhasX);


/* Palindromo */
var Palindromo = function(Palavra){
    var PalavraVerif = Palavra.split("").reverse().join("");

    console.log(PalavraVerif);
    if (Palavra.toLowerCase() === PalavraVerif.toLowerCase()){
        console.log("%s É um palindromo", Palavra);
    }
    else{
        console.log("%s Não é um palindromo", Palavra)
    }
}

var Palavra = prompt("Digite a palavra que deseja conferir se é um palíndromo ")
Palindromo(Palavra);


/* Programa Diferente */
var ProgramaDif = function(){
    for(i = 0; i <= 100; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz");
        }
        else{
            if(i % 3 == 0){
                console.log("Fizz");
            }
            else{
                if(i % 5 == 0){
                    console.log("Buzz");
                }
                else{
                    console.log(i);
                }
            }
        }
    }
}

ProgramaDif();

/* Min e Max */
var MinMax = function(a,b,Action){
    return Action(a,b);
}

var Num1 = prompt("Digite o primeiro número ");
var Num2 = prompt("Digite o segundo número ");
var Acao = prompt("Digite 1 para Minimo, qualquer outro numero será maximo ");
if (Acao == 1){
    console.log("O menor número é: " + MinMax(Num1,Num2,Math.min))
}
else{
    console.log("O maior número é: " + MinMax(Num1,Num2,Math.max))
}


/* Recursividade */
var Mod = function(Number, Mod){
    if(Number % Mod == 0){
        return true;
    }
    else{
        return false;
    }
}

var Mod2 = function(Number){
    return Mod(Number, 2);
}

var Number = prompt("Digite um número que deseja saber se é par");
var Resposta = Mod2(Number);
if(Resposta == true){
    console.log("O número %s é par", Number);
}
else{
    console.log("O número %s não é par", Number);
}

Number = prompt("Digite um número ");
var ModNum = prompt("Digite o divisor ");
Resposta = Mod(Number,ModNum);
if(Resposta == true){
    console.log("O número %s é divisível por %s ", Number, ModNum);
}
else{
    console.log("O número %s não é divisível por %s ", Number, ModNum);
}


/* Contando Caracteres */
var CountChars = function(Frase, C){
    var aux = 0;
    
    for(i = 0; i< Frase.length; i++){
        if(Frase[i] == C){
            aux++
        }
    }
    return aux;
}

var Frase = prompt("Digite a frase ");
var C = prompt("Digite o caractere ");
var QuantCharac = CountChars(Frase,C);
console.log("Tem %s do character %s dentro da frase: %s ", QuantCharac, C,Frase);


/* Trabalhando com Intervalos */
var range = function(Min, Max){
    var Vetor = [];
    var aux;
    
    if(Min > Max){
        aux = Min;
        Min = Max;
        Max = aux;
    }

    for(var j = Min + 1; j < Max; j ++){
        Vetor.push(j)
    }

    return Vetor;
}

var RangeI = function(Min, Max, i){
    var Vetor = [];
    var aux;
    
    if(Min > Max){
        aux = Min;
        Min = Max;
        Max = aux;
    }

    for(var j = Min + 1; j < Max; j += i){
        Vetor.push(j)
    }

    return Vetor;
}

var MinR = prompt("Digite o minimo ");
var MaxR = prompt("Digite o maximo ");
var Inter = prompt("Digite o intervalo");
var Vetor = range(MinR,MaxR);
console.log(Vetor);

MinR = prompt("Digite o minimo ");
MaxR = prompt("Digite o maximo ");
Inter = prompt("Digite o intervalo");
Vetor = RangeI(MinR,MaxR,Inter);
console.log(Vetor);


/* Revertendo um Array */
var ReverseArray = function(Vetor){
    var Clone = [];
    for(i = 0; i < Vetor.length; i++){
        Clone[i] = Vetor[i];
    }
    return Clone.reverse();
}


var Vetor2 = [5, 68, 75, 40, 70, 87];

VetorInver =ReverseArray(Vetor2);
console.log(VetorInver);


var ToList = function(Vetor){
    var Lista;

    for(var i = 0; i < Vetor.length; i++){
            Lista = {
            value: Vetor[i],
            rest: Lista,
        }
    }
    return Lista;
}

var ListaDoVetor = ToList(Vetor2);
console.log(ListaDoVetor);


/* DeepEquals */
var DeepEquals = function(objeto1, objeto2){
    var Keys1 = Object.keys(objeto1);
    var Keys2 = Object.keys(objeto2);
    var Vetor = [];

    for(var i = 0; i < Keys1.length; i++){
        if(Keys1[i] in objeto2){
            Vetor.push(Keys1[i]);
        }
        else if(Keys2[i] in objeto1){
            Vetor.push(Keys2[i]);
        }
    }
    if(Keys1.length == Vetor.length && Keys2.length == Vetor.length){
        return true;
    }
    else{
        return false;
    }
}

var Objeto1 = {
    sucinto: "bombar",
    ganhar: "sempre"
};

var Objeto2 = {
    sucinto: "bombar",
    ganhar: "sempre",
    alcool: "vodka"
};

var Objeto3 = {
    sucinto: "bombar",
    ganhar: "sempre",
    alcool: "vod"
};

var DeepEqualsDif = DeepEquals(Objeto1,Objeto2);
console.log(DeepEqualsDif);

var DeepEqualsEqual = DeepEquals(Objeto2,Objeto3);
console.log(DeepEqualsEqual);


/* Ordenação */
var bubbleSort = function(vetor, criterio){
    for(var i = 0; i < vetor.length; i++){
        for( var j = 0; j < vetor.length; j++){
            if(criterio(vetor[j], vetor[j + 1])){
                var tmp = vetor[j];
                vetor[j] = vetor [j + 1];
                vetor[j + 1] = tmp;
            }
        }
    }
    return vetor;
}

function Crescente(a, b){
    return (a > b);
}

function Decrescente(a, b){
    return (a < b);
}

function CrescenteImpar(a, b){
    return ((a > b) && (a%2 !== 0));
}

function DecrescentePar(a, b){
    return ((a < b) && (a%2 === 0));
}

bubbleSort(Vetor2, Crescente);
console.log(Vetor2);


/* Criptografia */
function CifraDoCesar(string){
    var strEncrypted = "";

    for(var i = 0; i < string.length; i++){
        if(string[i] != "!" && string[i] != " " && string[i] != "." && string[i] != "?"){
            if(string.charCodeAt(i) <= 77){
                strEncrypted += String.fromCharCode(string.charCodeAt(i) + (Math.random() * (26 - 1) + 1));
            }
            else{
                strEncrypted += String.fromCharCode(string.charCodeAt(i) - (Math.random() * (26 - 1) + 1));
            }
        }
        else{
            strEncrypted += string[i];
        }
    }
    return strEncrypted;
}

var Encripta = function(string, criterio){
    return criterio(string);
}

console.log(Encripta("Eu sou alguem escondido", CifraDoCesar));


/* Verificando um Número */
var VerifNumero = function(num, verif){
    num = parseInt(num);
    if(typeof num == "number"){
        return verif(num);
    }
    else{
        console.log("Este não é um número ");
    }
}

function EhImpar(num){
    if (num % 2 !== 0){
        return true;
    }
    else{
        return false;
    }
}

function EhPrimo(num){
    var aux = 0;

    for(i = 1; i < num; i++){
        if(num % i == 0){
            aux++;
        }
    }
    if(aux === 1){
        return true;
    }
    else{
        return false;
    }
}

console.log(VerifNumero(13, EhPrimo));


/* Transformações em uma String */
var TransformaString = function(string, Parametro) {
    var stringModif = "";
    for(i = 0; i < string.length; i++){
        stringModif += Parametro(string[i]); 
    }
    return stringModif;
}

function CaixaAltaVogais(character){
    var vogais = ["a", "e", "i", "o", "u"];
    var novoCharac = character.toLowerCase();
    return (vogais.includes(novoCharac)) ? character.toUpperCase():character;
}

function CaixaAltaCons(character){
    var consoantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    var novoCharac = character.toLowerCase();
    return (consoantes.includes(novoCharac)) ? character.toUpperCase():character;
}

function CaixaBaixaVogais(character){
    var vogais = ["a", "e", "i", "o", "u"];
    var novoCharac = character.toLowerCase();
    return (vogais.includes(novoCharac)) ? character.toLowerCase():character;
}

function CaixaBaixaCons(character){
    var consoantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    var novoCharac = character.toLowerCase();
    return (consoantes.includes(novoCharac)) ? character.toLowerCase():character;
}

console.log(TransformaString("dawdnwadnawdjwadnwaudwah", CaixaAltaCons));


/* Funções Matriciais */
var CriaMatriz = function(tam, parametro){
    var matriz = [];
    for(var i = 0; i < tam; i++) {
        matriz[i] = [];
        for(var j = 0; j < tam; j++) {
            matriz[i][j] = parametro(i, j);
        }
    }
    return matriz;
}

function SomaMat(i, j){
    return i + j;
}
function MultMat(i, j) {
    return i * j;
}

function BinMat(i, j) {
    return (i == j ? 1 : 0);
}

function ElevaMat(i, j) {
    return (i ^ 2 / (j + 1));
}

function ParamQQ(i, j) {
    return (i > j ? 1 : (i < j ? 5 : 0));
}

console.log(CriaMatriz(5, MultMat)); 