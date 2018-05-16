var linhas = prompt("Digite a quantidade de linhas : ")

    for (var i = 0; i < linhas; i++) {
        if ((i % 2) == 0) {
            console.log("# # # #");
        }
        else{
            console.log(" # # # #");
        }
    }
