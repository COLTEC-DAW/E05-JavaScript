function countChars(frase, c) {
    var count = 0;
    frase = frase.toLowerCase();
    for(i = 0; i < frase.length; i++) {
      if(frase[i] == c) {
        count++;
      }
    }
    return count;
  }  
  console.log(countChars("Uma frase qualquer", 'e'));
  //toLowerCase coverte a string em letras minúscula
  //.length retorna tamanho da string 