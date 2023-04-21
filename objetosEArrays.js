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
    console.log(resultado);
    return resultado;
}

range(10,20);
rangeI(10,20,3);