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
