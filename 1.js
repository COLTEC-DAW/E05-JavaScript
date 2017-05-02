var qtd = prompt("Digite a quantidade de linhas:");
var string="";
for(i=1;i<=qtd;i++){
    for(j=i;j>=0;j--){
        
        string += "#";
        //console.log(string+j);
    }
    console.log(string);
    string="";
}


var string = "";
 
 var escolha = prompt("Insira o número de linhas");
 
 for (var i=0; i<escolha; i++)
 {
     for (var j=i; j>=0; j--)
     {
 		string = string + "#";
     } 
 
 	console.log (string);
 	string = "";
 } 