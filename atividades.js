//Atividade Desenhando Triangulo
function triangulo(nLinhas){
    console.log("****Desenhando um triângulo****")
    for(i = 0; i < nLinhas; i++){
        var jogoDaVelha = "";
        for(j = 0; j <= i ; j++){
            jogoDaVelha += "#";
        }
        console.log(jogoDaVelha);
    }   
}
var nLinhas = prompt("Desenhando um triangulo - Quantas linhas terá o triangulo? ");
triangulo(nLinhas);

function xadrex(nLinhas){
    console.log("Desenhando um tabuleiro");
    var jogoDaVelha ="# # # #";
    for (i = 0; i < nLinhas ; i++){
        if(!(i % 2)){
            console.log(jogoDaVelha)
        }else{
            console.log(" " + jogoDaVelha);
        }
    }
}
var nLinhas = prompt("Desenhando um tabuleiro - Quantas linhas terá o tabuleiro? ");
xadrex(nLinhas);
