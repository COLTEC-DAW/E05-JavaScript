function triangulo(numero){
    for(let i =0;i<numero;i++) {
    document.write("<br/>");
        for(let j=0;j<=i;j++){
            document.write("#");
     
        }
    }
}
function xadrez(numero){

        for(let j=0;j<=numero;j++){
           if(j%2==0){
             document.write("# # # #");
             document.write("<br/>");
            }
            if(j%2!=0){
             document.write("# # # # #");
             //o espaço que eu dei n saiu 
             document.write("<br/>");
            }     
    }
}
function palindromo(word) {
    let numOfLetters = word.length,
      lastCharIndex = numOfLetters - 1;
  
    if (numOfLetters === 0 || numOfLetters === 1) {
      document.write("eh palindromo");
      return true;
    }
  
    if (word[0] === word[lastCharIndex]) {
      word = word.substr(0, lastCharIndex).substr(1);
      return palindromo(word);
    }
    document.write("nao eh palindromo");
    return false;
  }
xadrez(5)
triangulo(5);
palindromo("abba");
