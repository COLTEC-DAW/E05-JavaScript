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

document.write('<br/>');

var hulk = prompt("digite o número de linhas!");
if (hulk > 0) {
    var i = 0;
    for (; i < hulk; i++) {
        if (i & 1) {} else { document.write("_") }
        console.log("< - numero de linhas")
        document.write("# # # # #");
        document.write('<br/>');
    }
}