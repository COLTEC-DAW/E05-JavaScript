/**
 * Exercicio 2:
 * @returns 
 */

var impar = function(){
    var oito = 8;
    var result = "";
    for (var i = 0; i < oito; i++){
        if(i%2 != 0){
            result += "#";
        } else {
            result += " ";
        }
    }
    return result;
}
var par = function(num){
    var oito = 8;
    var result = "";
    for (var i = 0; i < oito; i++){
        if(i%2 == 0){
            result += "#";
        } else {
            result += " ";
        }
    }
    return result;
}
var impressao = function(linhas){
    for (var i = 0; i < linhas; i++){
        if(i%2 != 0) {
            console.log(impar());
        } else {
            console.log(par());
        }
    }
}
   
// main
var linhas = prompt("Quantas linhas deseja imprimir?");
impressao(linhas);