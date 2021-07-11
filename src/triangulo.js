/**
 * Exercicio 1:
 * @returns 
 */

var impressao = function(linhas){
  var result = "";
  for (var i = 0; i <= linhas; i++){
    if ( i == 1 ){}
    else {
      for (var j = 0; j < i; j++){
        result += "#"
      }
    }
    console.log(result);
    result = "";
  }
}
  
// main
var linhas = prompt("Quantas linhas deseja imprimir?");
impressao(linhas);