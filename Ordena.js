function bubbleSort(vet, funcao) {
    for (let i = 0; i < vet.length - 1; i++) {
      for (let j = 0; j < vet.length - 1 - i; j++) {
        if (funcao(vet[j], vet[j + 1]) > 0) {
          [vet[j], vet[j + 1]] = [vet[j + 1], vet[j]];
        }
      }
    }
    return vet;
  }
  
  function crescente(a, b) {
    return a - b;
  }
  
  function decrescente(a, b) {
    return b - a;
  }
  
  function crescenteImparPrimeiro(a, b) {
    if (((a%2) === 1) && ((b%2) === 0)) {
      return 0;
    } else if (((a%2) === 0) && ((b%2) === 1)) { // aqui faltava um parêntese de fechamento
      return 1;
    } else {
      return a - b;
    }
  }
  
  function decrescenteParPrimeiro(a, b) {
    if (((a%2) === 0) && ((b%2) === 1)) {
      return 0;
    } else if (((a%2) === 1) && ((b%2) === 0)) { // aqui faltava um parêntese de fechamento
      return 1;
    } else {
      return b - a;
    }
  }