let imprimeTabuleiro = () => {
    let linha;
    let isBlack;
    for(i = 0; i < 8; i++){
        linha = ""
        if(i % 2 == 0){
            isBlack = true
        }else{
            isBlack = false
        }
        for(j = 0; j < 8; j++){
            if(isBlack){
                linha += "#"
            }else{
                linha += " "
            }
            isBlack = !isBlack
        }
        console.log(linha)
    }
}