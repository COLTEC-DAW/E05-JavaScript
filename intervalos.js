var num1 = 14;
var num2 = 132;
var variacao = 4;

function range(min, max){
    
    var aux = 0;
    if(min > max){
        aux = min;
        min = max;
        max = aux;
    }
    
    var array = [];
    aux = max - min;
    for(i = 0; i <= aux ; i++){
        array[i] = min++;
    }
    return array;
}

function range2(min, max, i){
    
    var aux = 0;
    if(min > max){
        
        aux = min;
        min = max;
        max = aux;
    }
    
    var array = [];
    for(j = 0; j <= max ; j++){
        array[j] = min;
        min += i;
        if(min > max)
        { break; }
    }
    return array;
}

console.log(range(num1, num2));
console.log(range2(num1, num2, variacao));