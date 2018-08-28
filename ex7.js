function countChars (frase, c){
	y = 0;
	for(var i = 0; i < frase.length; i++){
		if(frase[i] == c){
			y++;
		}
	}
	return y;
}
