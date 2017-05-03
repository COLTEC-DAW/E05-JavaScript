function espaco(minimo, maximo, entre){
    var lista=[];
    var k=0;
    for(var i=minimo;i<=maximo;i++){
        if((i-minimo)%entre == 0){
            lista[k] = i;
            k++;
        }
    }
    return lista;
}

function espaco2(minimo, maximo){
    var lista=[];
    for(var i=minimo;i<=maximo;i++)
        lista[i-minimo] = i;
    return lista;
}

console.log(espaco2(10,100));
console.log(espaco(10,100,2));