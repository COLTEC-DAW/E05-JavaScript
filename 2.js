
var qtd = prompt("Digite a quantidade de linhas:");
var string1 = " # # # #";
var string2 = "# # # #";
var controle = 0;
for(i=0;i<qtd;i++){
    if(controle == 0){
        console.log(string2);
        controle=1;
    }
    else{
        console.log(string1);
        controle=0;
    }
}