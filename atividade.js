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

var ehPalindrono = function  (str){
    var aux = str.split('').reverse().join('')

    if(str === aux){
        return true;
    }else{ return false; }
}
console.log(ehPalindrono("ava"))

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
