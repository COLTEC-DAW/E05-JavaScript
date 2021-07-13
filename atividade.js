// Desenhando um triângulo
var triangulo = function (size){
    var triang = [];
    
    for(var i = 0; i < size; i++){
        triang[i] = [];
        for(var j = 0; j <= i+1; j++){
            triang[i][j] = '#';
        }
    }
    var imprimeTriangulo = function (triang){
        for(var i = 0; i < triang.length; i++){
            console.log(triang[i].join(''));
        }
    } 
    imprimeTriangulo(triang);  
}
triangulo(5);

// Tabuleiro de Xadrez
var tabuleiroXadrez = function(size){
    var xadrez = []
    for(var i = 0; i < size; i++){
        xadrez[i] = [];
        for(var j = 0; j < size; j++){
            if(i%2 == 0){
                if(j%2 != 0){
                    xadrez[i][j] = '#';
                }else{
                    xadrez[i][j] = ' ';                
                }
            }else{
                if(j%2 == 0){
                    xadrez[i][j] = '#';
                }else{
                    xadrez[i][j] = ' ';                
                }
            }
        }
    }
    var imprimeTabuleiro = function (xadrez){
        for(var i = 0; i < xadrez.length; i++){
            console.log(xadrez[i].join(''));
        }
    } 
    imprimeTabuleiro(xadrez);
}
tabuleiroXadrez(20);

// Verificando Palíndromos
var ehPalindrono = function  (str){
    var aux = str.split('').reverse().join('')

    if(str === aux){
        return true;
    }else{ return false; }
}
console.log(ehPalindrono("ava"))

// Um programa diferente...
var fizzBuzzDe1a100 = function(){
    for(var i = 1; i <= 100; i++){
        if((i%3 == 0) && (i%5 == 0)){
            console.log('FizzBuzz');
        }else if(i%3 == 0){
            console.log('Fizz');
        }else if(i%5 == 0){
            console.log('Buzz');
        }else{
            console.log(i)
        }
    }
}
fizzBuzzDe1a100();

// Mínimo e Máximo
var min = function (val1, val2){
    if(val1 < val2){
        return val1;
    }else if (val2 < val1){
        return val2;
    }
    // caso ambos sejam iguais
    else{
        return null;
    }
}
var max = function (val1, val2){
    if(val1 > val2){
        return val1;
    }else if (val2 > val1){
        return val2;
    }
    // caso ambos sejam iguais
    else{
        return null;
    }
}
console.log("O menor valor eh:",min(1,2), "; o maior valor eh:",max(1,2))

// Contando caracteres
var countChars = function (frase, c){
    var aux = frase.split('');
    var count = 0;
    for(var i = 0; i < frase.length; i++){
        if(aux[i] == c){
            count++;
        }
    }
    return count;    
}
console.log(countChars("Eu estou digitando agora", 't'));

// Trabalhando com intervalos
var range = function(min, max, j){
    var interval = [];
    
    if( j == 0 ){ j = 1; }

    for(var i = min+1; i < max; i += j){
        interval[(i-(min+1))/j] = i;
    }
    return interval;
}
console.log("O intervalo eh: ", range(12,28,3));

// Revertendo um array
var reverseArray = function (array){
    return array.reverse();
}
console.log(reverseArray(['D','R','A','C','U','L','A',]));

// Trabalhando com listas
var toList = function(array){
    var list = {};
    var aux = list; 
    var i;
    for(i = 0; i < array.length-1; i++){
        aux.value = array[i];
        aux.rest = {};
        aux = aux.rest;
    }

    aux.value = array[i];
    aux.rest = null;

    return list;
}
console.log(toList(['A','B','C']));

// DeepEquals
var deepEquals = function (obj1, obj2){
    var answer = true;
    
    for(var prop in obj1){
        if(prop in obj2){
            continue;
        }else{
            answer = false;
        }
    }
    for(var prop in obj2){
        if(prop in obj1){
            continue;
        }else{
            answer = false;
        }
    }
    return answer;
}

console.log(deepEquals({produto:'abacaxi', preco:'15'},{produto:'pamonha', preco: '12'}));

// Ordenação 
var sort = function(criterion, array){ 
    for(var i = array.length; i >= 0; i--){
        for(var j = 0 ; j < array.length; j++){
            if(criterion(array[j],array[j+1])){
                var aux = array[j];
                array[j] = array[j+1];
                array[j+1] = aux;
            }
        }
    }
    return array;
}
var array = ['0','1','2','3','4','5','6','7','8','9']

console.log(sort(function(A,B){return (A < B);},array));
console.log(sort(function(A,B){return (A > B);},array));
console.log(sort(function(A,B){return (((A > B) && ( A%2 == 0)) || ((A < B) && ( A%2 !=0 )));},array));

// Criptografia
var crioptografar = function (string, criterion){
    characters = string.split('');
    for(var i = 0; i < characters.length; i++){
        characters[i]= criterion(characters[i]);
    }
    return characters.join('');
}

console.log(crioptografar('OTORRINOLARINGOLOGISTA', function(char){
    return String.fromCharCode(((char.charCodeAt()+14)>90?(char.charCodeAt()+14)-25:(char.charCodeAt()+14)));
}))

console.log(crioptografar('DIDGGWCDZOGWCUDZDUWHIO', function(char){
    return String.fromCharCode(((char.charCodeAt()-14)<65?(char.charCodeAt()-14)+25:(char.charCodeAt()-14)));
}))


