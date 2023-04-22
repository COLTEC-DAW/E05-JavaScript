let str = prompt("Palavra: "); // string a ser verificada
let tam_str = str.length; //Tamanho da string

//caracteres
let char_i; 
let char_f;

//O índice do primeiro caractere a ser incluído
let f = tam_str; //indice inicial em ordem decrescente
let i = 0; //indice inicial em ordem crescente

for(i; i < tam_str; i++){
  //str.substring(x,  índice do primeiro caractere a ser excluído)
  char_i = str.substring(i, i + 1); //caractere extraído a partir do indice i
  char_f = str.substring(f, f - 1); //caractere extraído a partir do indice j
  
  --f; //diminui o indice da posição dos caracteres
  //++i; aumenta o indice da posição dos caracteres
  
  //caracteres em indices opostos com valores difentes
  if(char_i != char_f){
      //Retorna ao usuário e para o for
      console.log("Não é um palindromo");
      break;
  }
  
  /*todos os caracteres da string na ordem crescente
  e descrescente foram analizados*/
  if(f == 0 && i == tam_str - 1){
      //Retorna ao usuário
      console.log("É um palindromo");
  }
}