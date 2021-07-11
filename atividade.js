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
    var k = 2;
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