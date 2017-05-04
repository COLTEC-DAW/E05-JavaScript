function range(min,max){
    var numeros=[];
    var k=0;
    for(i=min+1;i<max;i++){
        numeros[k]=i;
        k++;
    }
    return numeros;
}
var numeros=range(2,10);
console.log(numeros);


function range2(min,max,i){
    var numeros=[];
    var k=0;
    var j=min;
    while(j<max){
        j=j+i;
        if(j<max){
            numeros[k]=j;
            k++;
        }
    }

    return numeros;
}

var numeros=range2(2,15,2);
console.log(numeros);