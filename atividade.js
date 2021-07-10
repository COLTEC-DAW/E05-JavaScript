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
