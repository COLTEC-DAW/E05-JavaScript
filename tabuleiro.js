var num = prompt("(Xadrez) Digite o numero de linhas");

for (i=0; i<num; i++){
    if(i%2==0){
        for(j=0; j<4; j++){
            document.write("OX");
        }
    }else{
        for(j=0; j<4; j++){
            document.write("XO");
        }
    }
    document.write("<br>");
}