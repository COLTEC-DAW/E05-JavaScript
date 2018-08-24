function palindromo(palavra) {
    palavra =palavra.toLowerCase();
    for(i = palavra.length-1; i >= 0; i--) {
      if(palavra[i] != palavra[palavra.length-1-i]){
        return console.log("Não é palindromo");
      }
      if(i == 0){
        console.log("É palindromo");
      }
    }
  }
  palindromo("arara");
  //toLowerCase coverte a string em letras minúscula 
  //.length retorna tamanho da string