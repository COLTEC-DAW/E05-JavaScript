var qtd = prompt("Digite a quantidade de linhas:");
var string="";
for(i=0;i<qtd;i++){
    for(j=i;j>=0;j--){
        string += "#";
    }
    console.log(string);
    string="";
}