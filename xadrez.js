function xadrez(quantidadeLinhas){
    for(var i = 0; i < quantidadeLinhas; i++){
        if(i % 2 == 0){
            console.log(hashtag);
        }
        else{
            console.log(" " + hashtag);
        }
    }
}

var hashtag = "# # # # ";
var quantidadeLinhas = prompt('Digite o numero de linhas para o tabuleiro de xadrez: ');

xadrez(quantidadeLinhas);