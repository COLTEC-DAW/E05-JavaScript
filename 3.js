var string = prompt("Digite sua String:");
var stringInvertida = string.split('').reverse().join('');
//console.log(stringInvertida);
string = string.split(' ').join('');
stringInvertida = stringInvertida.split(' ').join('');

if(string === stringInvertida){
    console.log( "É Palindromo");
}
else{
    console.log("Não é palindromo");
}