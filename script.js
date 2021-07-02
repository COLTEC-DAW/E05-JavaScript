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

// Parte II: Tabuleiro de Xadrez
function Tabuleiro(NLinhas, NColunas){
    for(var i=0;i<NLinhas;i++){
        var aux = "";
        if(i!=0 && i%2!=0){
            aux += " ";
        }
        for(var j=0;j<NColunas;j++){
            aux += "# ";
        }
        console.log(aux);
    }
}
Tabuleiro(5,2);