var palindromo = prompt("(Palindromo) Digite uma palavra:");
var aux=false;

for(i = 0; i < palindromo.length / 2; i++){
    if (palindromo[i] != palindromo[palindromo.length - i - 1]){
        document.write(palindromo + " não é palindromo!<br>");
        aux=false;
    }else{
        aux=true;
    }
}
if(aux==true){
    document.write(palindromo + " é palindromo!<br>");
}