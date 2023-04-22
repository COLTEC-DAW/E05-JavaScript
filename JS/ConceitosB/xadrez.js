function xadrez(){
    let quantLinhas = prompt("Digite a quantidade de linhas do xadrez: ");
    let horizontal = "# # # #";

    for(i = 1; i <= quantLinhas; i++){
        if(i % 2 == 0){
            console.log(" " + horizontal);
        } else{
            console.log(horizontal);
        }
    }
}

xadrez();