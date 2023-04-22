function countChars(frase, c){
    let cont = 0;

    
    for(i = 0; i < frase.length; i++){
        if(frase.charAt(i) == c){
            cont++;
        }
    }
}