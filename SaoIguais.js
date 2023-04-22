function saoIguais(objA, objB) {
    let chavesA = Object.keys(objA);
    let chavesB = Object.keys(objB);
  
    if (chavesA.length !== chavesB.length) {
      return false;
    }
  
    for (let chave of chavesA) {
      let valorA = objA[chave];
      let valorB = objB[chave];
  
      let saoObjetos = ehObjeto(valorA) && ehObjeto(valorB);
      if ((saoObjetos && !saoIguais(valorA, valorB)) || (!saoObjetos && (valorA !== valorB))) {
        return false;
      }
    }
  
    return true;
  }
  
  function ehObjeto(obj) {
    return obj != null && typeof obj === "object";
  }