// Desenhando Triangulo

function triangulo(nLinhas){
    for(var i=1;i<=nLinhas;i++){
        var aux = "";
        for(var j=0; j<i; j++){
            aux += "#";
        }
        console.log(aux);
    }
}