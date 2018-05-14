var Linhas;

Linhas = prompt("Linhas: ");

function f() {
    for (let c = 0; c < Linhas; c++) {
        if ((c % 2) == 0) {
            console.log("# # # #");
        }
        else{
            console.log(" # # # #");
        }
    }
}

f();