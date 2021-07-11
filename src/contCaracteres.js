var countChars = function(frase, letra){
    var quant = 0;
    var arrayFrase = frase.split(''); 
    for (var i = 0; i < arrayFrase.length; i++){
        if(arrayFrase[i] == letra){
            quant += 1;
        }
    }
    return quant;
}
//main
var frase = prompt("Digite uma frase: ", "Frase");
var letra = prompt("Digite a letra que deseja saber a quantidade de correspondências: ", "letra");
console.log(countChars(frase, letra));