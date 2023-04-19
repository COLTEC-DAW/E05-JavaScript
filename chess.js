var length = prompt("Tamanho do tabuleiro: ");
var tabuleiro = "";

for (var index = 0; index < length; index++) {
    if(index % 2 == 0){
        let i = 0;
        while(i < length){
            tabuleiro += "# ";
            i++;
        }
        tabuleiro += "\n";
    }else{
        let i = 0;
        while(i < length){
            tabuleiro += " #";
            i++;
        }
        tabuleiro += "\n";
    }
}

console.log(tabuleiro);