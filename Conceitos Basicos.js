function DesenhaTriangulo(){
    var altura = prompt("Digite a altura do Triangulo:");
    for (var i = 0; i<= altura; i++){
        for(var j = 0; j <= i; j++){
           console.log("#");
        }
        console.log("\n");
    }
  }
  DesenhaTriangulo();
  
  
  function Tabuleiro(){
      var linhas = prompt("Digite a quantidade de linhas do tabuleiro:");
     for(var i=0; i< linhas; i++){
       console.log("# # # #");
      console.log("\n");
      }
     }
  Tabuleiro();
  
  function EhPalindromo(){
      var word = prompt("Digite uma palavra ou uma frase para verificar se eh um palindromo");
      word = word.toUpperCase();
      word = word.split('').join('');
  
      var InvertidaWord = word.split('').reverse().join('');
  
      if (word == InvertidaWord){
          console.log("Eh um palindrmo");
      }
      else{
          console.log("Nao eh um palindromo");
      }
  }
  EhPalindromo();
  
  function max(a,b){
      if(a > b){
          return a;
         }else if(a < b){
          return b;
         }else if (a == b){
           return 0;
         }
  
  }