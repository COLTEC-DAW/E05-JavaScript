function range(min, max){
    var resultado=new Array();
    for(let i=min;i<=max;i++){
        resultado.push(i);
    }
    return resultado;
}

function rangeI(min, max, i){
    var resultado=new Array();
    for(let j=min;j<=max;j=j+i){
        resultado.push(j);
    }

    return resultado;
}

function reverseArray(array){
    for (let i=0, j=array.length-1;i<array.length/2;i++, j--){
        var temp=array[i];
        array[i]=array[j];
        array[j]=temp;
    }
    console.log(array)
    return array;
}

//testes
range(10,20);
rangeI(10,20,3);
reverseArray([6,5,4,3,2,1]);