function range(min, max){
    var resultado=new Array();
    for(let i=min;i<=max;i++){
        resultado.push(i);
    }
    return resultado;
}

range(10,20);