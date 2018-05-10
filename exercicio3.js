function frasePalindromo(palavra){
    
  for (var i = tam-1; i >= 0; i--) {
    palavraInvertida += palavra[i]
  }

  palavraInvertida.toString();
  //console.log(palavra)            teste 
  //console.log(palavraInvertida)   teste
  
  if(palavra==palavraInvertida)
    console.log("É Palindromo")
  
  else 
    console.log("Não é palindromo")
}
var palavra = prompt("Palavra para ver se é um palindromo")
var palavraInvertida = ""
var tam = palavra.length
    
    frasePalindromo(palavra)