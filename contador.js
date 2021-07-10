function countChars(frase, c){
    var count = 0;

    for(var i = 0; i < frase.length; i++){
        if(frase[i] == c){
            count++;
        }
    }
    return count;
}