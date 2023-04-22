function cifraDeCesar(mensagem, deslocamento) {
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    let mensagemFinal = '';
    let letraEncontrada = false;
    mensagem = mensagem.toLowerCase();
  
    for (let i = 0; i < mensagem.length; i++) {
      for(let j = 0; j < alfabeto.length; j++){
        if(mensagem[i] == alfabeto[j]){
          mensagemFinal += alfabeto[(j + deslocamento) % 26];
          letraEncontrada = true;
        }
      }
      if(!letraEncontrada){
        mensagemFinal += mensagem[i];
      }
      letraEncontrada = false;
    }

    return mensagemFinal;
  }