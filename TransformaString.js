function modificaString(String, funcao) {
    let StringTransformada = '';
  
    for (let i = 0; i < String.length; i++) {
      const char = String[i];
      StringTransformada += funcao(char);
    }
  
    return StringTransformada;
}

function maiusculaVogais(char) {
    if (/[aeiou]/i.test(char)) {
      return char.toUpperCase();
    } else {
      return char;
    }
  }
  
  function maiusculaConsoantes(char) {
    if (!/[aeiou]/i.test(char) && /[a-z]/i.test(char)) {
      return char.toUpperCase();
    } else {
      return char;
    }
  }
  
  function minusculaVogais(char) {
    if (/[aeiou]/i.test(char)) {
      return char.toLowerCase();
    } else {
      return char;
    }
  }
  
  function minusculaConsoantes(char) {
    if (!/[aeiou]/i.test(char) && /[a-z]/i.test(char)) {
      return char.toLowerCase();
    } else {
      return char;
    }
  }