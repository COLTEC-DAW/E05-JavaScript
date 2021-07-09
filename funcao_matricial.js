function soma(a, b){
    a = parseInt(a);
    b = parseInt(b);
    return a + b;
}
function multiplica(a,b){
    a = parseInt(a);
    b = parseInt(b);
    return a * b;
}
function igual(a,b){
    a = parseInt(a);
    b = parseInt(b);
    return a == b ? 1 : 0;
}
function equacao1(a,b){
    a = parseInt(a);
    b = parseInt(b);
    return a^2/(b+1);
}
function equacao2(a,b){
    a = parseInt(a);
    b = parseInt(b);
    return a > a ? 1 : (a < a ? 5 : 0);
}

function cria_matriz(tamanho, modo){   
    var matriz = [];
    var array = [];
    for(var i = 0;i<tamanho;i++){
        for(var j = 0;j<tamanho;j++){
            array.push(modo(i,j));
        }
        matriz.push(array);
        var array = [];
    }
    return matriz;
}

console.log(cria_matriz(5,soma));
console.log(cria_matriz(5,equacao2));






