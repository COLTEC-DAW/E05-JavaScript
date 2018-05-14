var Linhas;
var minhaString;

Linhas = prompt("Linhas: ");

function f () {
    for (let i = 0; i <= Linhas; i++) {
        for (let c = 0; c <= i; c++) {
            minhaString = minhaString + "#";
        }
        minhaString = minhaString + "\n"
    }

    console.log(minhaString);
}

f();