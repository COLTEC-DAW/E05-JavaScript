var stg = prompt("Frase:");
var stg2 = "";
var i=0;

for(var i=stg.length-1; i>=0; i--){
    stg2=stg2.concat(stg[i]);
}

if(stg==stg2){
    document.write("Palindromo");
}
else{
    document.write("Nao eh palindromo");
}