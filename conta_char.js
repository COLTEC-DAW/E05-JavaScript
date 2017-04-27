function countChars(frase, c){
    var times = 0;
    for(var i = 0; i < frase.length; i++){
        if(frase[i] == c) times++;
    }
    return times;
}