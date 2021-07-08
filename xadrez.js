function xadrez(linhas){
    for(var i = 0; i < linhas; i++){
        for(var j = 0; j < 8; j++){
            if(i%2 == 0){
              console.log(xadrez1);
            }else{
                console.log(xadrez2);
            }

        }
    }
}
var xadrez1 = "# # # # "
var xadrez2 = " # # # #"
var linhas = prompt('Digite o numero de linhas: ');
xadrez(linhas);