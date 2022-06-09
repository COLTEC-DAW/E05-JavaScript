//___DESENHANDO_UM_TRIANGULO___//

var neymar = prompt("digite o número de linhas");

if (neymar > 0) {
    var i = 0;
    for (; i <= neymar; i++) {
        var aux = 0;
        for (; aux < i; aux++) {
            console.log("< - numero de hashtags!");
            document.write(" # ");
        }
        document.write('<br/>');
    }
}
//_____________________________//
//_____TABULEIRO_DE_XADREZ_____//

document.write('<br/>');
//--------
var hulk = prompt("digite o número de linhas!");

if (hulk > 0) {
    var i = 0;
    for (; i < hulk; i++) {
        if (i & 1) {
            document.write("&nbsp;# # # #");
            document.write('<br/>');
        } else {
            document.write("# # # #");
            document.write('<br/>');
        }
    }
}
//_____________________________//
//_____________________________//