function verificarNumero(numero, funcaoVerificacao) 
{   return funcaoVerificacao(numero);   }
  
  function Impar(numero) 
  { return numero % 2 !== 0;    }
  
  function Primo(numero) {
    if (numero <= 1) {
      return false;
    }
    
    for (var i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  console.log("13=Impar? " + verificarNumero(13, Impar)); // true
  console.log("2=Impar? " + verificarNumero(2, Impar)); // false
  
  console.log("5=Primo? " + verificarNumero(5, Primo)); // true
  console.log("6=Primo? " + verificarNumero(6, Primo)); // false
  