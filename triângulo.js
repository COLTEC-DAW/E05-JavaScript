
function triangulo(linhas){
    for(var i = 1; i<=linhas;i++){
        for(var x = 0;x<i;x++){
            jogo_da_velha += '#';
        }
        console.log(jogo_da_velha);
        jogo_da_velha = "";
    }
}
var jogo_da_velha = '';
var linhas = prompt('Digite o numero de linhas: ');

triangulo(linhas);