/**
 * var Triangulo recebe funcao que imprime # de acordo com o numero de linhas informado pelo usuario
 */
var triangulo = function(numLinhas) {
    var i=0;
    var j=0;
    var cadaLinha = "";
    for (i;i<numLinhas;i++) {
        for (j;j<i+1;j++) {   
            cadaLinha += "#";
        }
        console.log(cadaLinha); //imprime no console.log
        document.write(cadaLinha + "<br>"); //imprime na pagina
    }

}

var numeroLinhas = prompt("Numero de linhas: "); //obter numero de linhas
triangulo(numeroLinhas); //chamar a funcao que desenha o triangulo




/**
 * var Xadrez recebe funcao que imprime o tabuleiro
 */
var xadrez = function(numLinhas) {
    var i=0;
    var j=0;
    for (i;i<numLinhas;i++) {
        if (i % 2 == 0) {   //verifica se uma linha par
            console.log("# # # #");
        }
        else {
            console.log(" # # # #");
        }
    }
}

var numLinhasXadrez = prompt("Numero de Linhas: ");
xadrez(numLinhasXadrez);





/**
 * Verificar palindromo
 */
var palindromo = function(texto){
    /*remover caracteres especiais*/
    texto = texto.toLowerCase(); //passar todo o texto para minusculo
    texto = texto.replace(/,/g, ""); //remover virgulas
    texto = texto.replace(/ /g, ""); //remover barra de espaço

    var i=0;
    var j=(texto.length) - 1;
    for(i;i<texto.length;i++){
        if(texto[i]!=texto[j]){
            console.log("Não eh palindromo");
            return false;

        }
        j--;
    }
    console.log("Eh palindromo");
    return true;

}

var obterTexto = prompt("Digite seu texto: ");
palindromo(obterTexto);



/**
 * Imprimir 1 a 100
 */
var umCem = function(){
    var i=1;
    for (i;i<=100;i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        }
        if (i % 3 == 0) {
            console.log("Fizz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }

}
umCem(); //chamar funcao