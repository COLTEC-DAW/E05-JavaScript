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
console.log(deepEquals(obj1, obj2)); 



