function verificaPalindromo(str){
    for(var i =0; i < str.length; i++){
      if(str[i] != str[str.length - (i+1)]){
        return false;
      }
      if(i > (str.length/2))
        break;
    }
    return true;
}

verificaPalindromo('natan');
