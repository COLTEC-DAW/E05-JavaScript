function countChars(frase,c){
    frase = frase.split('');
    var tam = frase.length;
    var count=0;
    for(i=0;i<tam;i++){
        if(frase[i] == c){
            count++;
        }
    }
    return count;
}
var qtd = countChars("Molejaoooooo!",'o'); //Há diferenciação entre Maiúsula e Minúscula
console.log(qtd);
