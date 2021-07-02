// Parte I: Desenhando um triângulo
function Triangulo(NLinhas){
    for(var i=1;i<=NLinhas;i++){
        var aux = "";
        for(var j=0; j<i; j++){
            aux += "#";
        }
        console.log(aux);
    }
}
