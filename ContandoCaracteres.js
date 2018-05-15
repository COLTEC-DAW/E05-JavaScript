function countChars (frase, c){
    n = 0;
    for(var x = 0; x < frase.length; x++){
    	if(frase[x] == c){
    		n++;
    	}
    }
    return n;
}