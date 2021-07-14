//Questão 1 - Desnhando um triângulo
function triangle(nLinhas){
    console.log("Desenhando um triângulo...")
    for(i = 0; i < nLinhas; i++){
        var hashtag = "";
        for(j = 0; j <= i ; j++){
            hashtag += "#";
        }
        console.log(hashtag);
    }   
}

var nlinhas = prompt("Qual o numero de linhas do triângulo?");
triangle(nlinhas);

//Questão 2 - Tabuleiro de xadrez
function xadrex(nLinhas){
    console.log("Desenhando um tabuleiro...");
    var hashtag ="# # # #";
    for (i = 0; i < nLinhas ; i++){
        if(!(i % 2)){
            console.log(hashtag)
        }else{
            console.log(" " + hashtag);
        }
    }
}
var nLinhas = prompt("Quantas linhas terá o tabuleiro de xadrez? ");
xadrex(nLinhas);

//Questão 3 - Palíndromo
function palindromo(Palavra){
    var inversa = Palavra.split("").reverse().join("");

    if(Palavra.toLowerCase() === inversa.toLowerCase()){
        return true;
    }else{
        return false;
    }

}

var palavra = prompt("Digite a palavra:");
var ehPalindromo = palindromo(palavra);

if(ehPalindromo == true){
    console.log("É palíndromo");
}else{
    console.log("Não é palíndromo")
}


//Questão 4 - Um programa diferente

function imprime1a100(){
    for(i = 0; i < 100; i++){
        if((i%3 == 0) &&(i%5 ==0)){
            console.log("FizzBuzz");
        }else if(i % 3 == 0){
            console.log("Fizz");

        }else if(i%5 == 0){
            console.log("Buzz");
        }else{
            console.log("%d", i)
        }
    }
}

imprime1a100();


//Questão 5 - Mínimo e Máximo
function min(a, b){
    var menor = 0;

    if(a < b){
        menor = a;
    }else{
        menor = b;
    }

    return menor;
}

function max(a, b){
    var maior = 0;

    if(a > b){
        maior = a;
    }else{
        maior = b;
    }

    return maior;
}

var a = prompt("Digite o primeiro numero que deseja comparar:");
var b = prompt("Digite o segundo numero que deseja comparar:");


console.log("menor:" +  min(a,b) + "\nmaior: " + max(a,b));


//Questão 6 - Recursividade

var mod = function(num, mod){
    if (num % mod == 0){ return true; }
    else { return false; }
}

var mod2 = function(num){
    if ( num % 2 == 0) { return true; }
    else { 
        console.log(mod(num, num % 2));
        return false;
    }
}
var num = prompt("Digite o número que deseja saber se é divisível por 2:");
if(mod(num) == true){
    console.log("É divisivel por 2");
} else if (mod(num) == false){
    console.log("Não é divisivel por 2");
}

//Questão 7 - Contando caracteres
var countChars = function(frase, c){
    var qtd = 0;
    var arrayfrase = frase.split(''); 

    for (var i = 0; i < arrayfrase.length; i++){

        if(arrayfrase[i] == c){
            qtd += 1;
        }
    }
    return qtd;
}
//main
var frase = prompt("Digite uma frase: ");
var car = prompt("Digite o caracter que deseja saber quantas vezes aparece: ");
console.log(countChars(frase, car)); 


//Questão 8
function range(min, max, i){
    var array = [];
    var varia = 0;

    for(j = min + 1; j < max; j++ ){
        if(varia = i){
            array.push(j);
        }else{
            varia+=1;
        }
    }
    return array;
}

var min = 1;
var max = 9;
var inter = prompt("Digite o intervalo");

console.log(range(min, max, inter))


//Questão 9 - Revertendo um array
function reverseArray(array){
    var arraycopia = array;
    arraycopia.reverse();

    return arraycopia
}

array = [1, 2, 3, 4, 5]
console.log(reverseArray(array));


//Questão 10 - Trabalhando com listas
var toList = function(array){
    var lista = {};
    var arrayR= array;
    arrayR.reverse();

    for(var i=0; i< arrayR.length; i++){
        var aux = {};
        aux.value = arrayR[i];
        aux.rest = lista;
        lista = aux;
    }

    return lista;
}

var array = [0,1,2,3,4,5,6,7];
console.log(toList(array)); 

//Questão 11 - DeepEquals
function deepEquals(obj1, obj2){
    if((obj1.turma == obj2.turma)&&  (obj1.idade == obj2.idade) && (obj1.nome == obj2.nome)){
        return "Turma, idade e nome são iguais"
    }else if((obj1.turma == obj2.turma)&&  (obj1.idade == obj2.idade)){
        return "Turma e idade são iguais";
    }else if((obj1.turma == obj2.turma)&&  (obj1.nome == obj2.nome)){
        return "Turma e nome são iguais";
    }else if((obj1.nome == obj2.nome)&&  (obj1.idade == obj2.idade)){
        return "Nome e idade são iguais";
    }else if((obj1.turma == obj2.turma)){
        return "Turma é igual";
    }else if((obj1.idade == obj2.idade)){
        return "Idade é igual";
    }else if((obj1.nome == obj2.nome)){
        return "Nome é igual";
    }else{
        return "nenhum é igual";
    }

}

function aluno(turma, idade, nome){
    this.turma = turma;
    this.idade = idade; 
    this.nome = nome;
}

var obj1 = new aluno(333, 17, "Joao");
var obj2 = new aluno(333, 16, "Indiano");


//Questão 12 - Ordenação
function Ordena(array, criterio) {
    var ordenado = array;
    for (var i = 0; i < ordenado.length; i++) {
        for (var j = 0; j < ordenado.length; j++) {
            if (criterio (ordenado[j], ordenado[j + 1]) == true){
                var aux = ordenado[j];
                ordenado[j] = ordenado[j + 1];
                ordenado[j + 1] = aux;
            }
        }
    }
	return ordenado;
}

var array = [2,5,6,8,455,37,34,12,1,0,5555,10];

console.log(array);
console.log("Crescente: " + Ordena(array, function(a, b) { return a > b; })); //cres
console.log("Decrescente: " + Ordena(array, function(a, b) { return a < b; })); //decres
console.log("Par-impar: " + Ordena(array, function(a, b) { 
    if((a>b) && (a%2 != 0)){ return true; }
    else{ return false; }
}));


//Questão 13 - Criptografia
var crypt = function(palavra, criterio){
    var crip = palavra.split('');
    for(var i=0; i< crip.length; i++){
        crip[i] = criterio(crip[i]);
    }
    return crip.join("");
}
var CifradeCesar = function(letra){
    for(var i=0; i< alfabeto.length; i++){
        if(alfabeto[i] == letra){
            break;
        }
    }
    i += 2;
    if(i>27){ i -=27; }
    return alfabeto[i];
}
//main
var palavra = prompt("Digite uma palavra para encriptarmos:");
var alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","ç"," "];

console.log(crypt(palavra, CifradeCesar)); 



//Questão 14 - Verificando um número
var verifica = function (numero, criterio) {
    if(criterio(numero) == true){
        return true;
    }else{
        return false;
    }
}

function primo(numero) {
    var resultado = 0;
    for (i = 2; i <= numero / 2; i++) {
        if (numero % i == 0) {
           resultado+=1;
           break;
        }
    }
     
    if (resultado == 0){
    return true;
    }else{
        return false
    }     
}

function impar(numero) {
    if(numero % 2 == 0){
        return false
    }else{
        return true;
    }
}

function par(numero) {
    if(numero % 2 == 0){
        return true
    }else{
        return false;
    } 
}

var numero = prompt("Digite um numero:")

console.log("Numero é primo? " + verifica(numero, primo));
console.log("Numero é impar? "+ verifica(numero, impar));
console.log("Numero é par? " + verifica(numero, par));


//Questão 15 - Transformando em uma string

var TransString = function(string, criterio) {
    aux = string;

    aux = criterio(aux)

    return aux;
}

var string = prompt("Digite a String: ");

//Caixa alta nas vogais
console.log(TransString(string, function (string){
    aux = string.split('');
    vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for(i = 0; i < aux.length; i++){
        if(vogais.includes(aux[i]) == true){
            aux[i] = aux[i].toUpperCase();
        }
    }

    return aux;
}));

//Caixa alta nas consoantes
console.log(TransString(string, function (string) {
    aux = string.split('');
    vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for(i = 0; i < aux.length; i++){
        if(vogais.includes(aux[i]) == true){            
        }else{
            aux[i] = aux[i].toUpperCase();
        }
    }

    return aux;
}));

//Caixa baixa nas vogais
console.log(TransString(string, function (string) {
    aux = string.split('');
    vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for(i = 0; i < aux.length; i++){
        if(vogais.includes(aux[i]) == true){
            aux[i] = aux[i].toLowerCase();
        }
    }

    return aux;
}));

//Caixa baixa nas consoantes
console.log(TransString(string, function (string) {
    aux = string.split('');
    vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for(i = 0; i < aux.length; i++){
        if(vogais.includes(aux[i]) == true){
        }else{
            aux[i] = aux[i].toLowerCase();
        }
    }

    return aux;
}));


//Questão 16 - Funções matriciais
var matriz = function(i1, j1, criterio){
    var matriz = [i1];

    for(k = 0; k < i1; k++){
        matriz[k] = [j1];

        for(l = 0; l < j1; l++){
            matriz[k][l] = criterio(k, l);
        }
    }
    return matriz;
}

var i1 = prompt("Digite o indice 1: ");
var j1 = prompt("Digite o indice 2: ");

console.log(matriz(i1, j1, function(i, j) {
    return i + j;
}));
console.log(matriz(i1, j1, function(i, j){
    return i * j;
}));
console.log(matriz(i1, j1, function(i, j){
    return  i == j? 1 : 0;
}));
console.log(matriz(i1, j1, function(i, j){
    return i^2/(j+1);
}));
console.log(matriz(i1, j1, function(i, j){
    return i > j ? 1 : (i < j ? 5 : 0);
}));





