function range(min, max){
    var array=[];
    for(var i=min;i<=max;i++)
        array[i-min] = i;
    return array;
}

function range2(min, max, inter){
    var array=[];
    var k=0;
    for(var i=min;i<=max;i++){
        if((i-min)%inter == 0){
            array[k] = i;
            k++;
        }
    }
    return array;
}

console.log(range(10,100));
console.log(range2(10,100,2));