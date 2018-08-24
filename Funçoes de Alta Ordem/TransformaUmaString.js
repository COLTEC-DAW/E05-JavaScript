function transform(s, criterio) {
    var ns = '';
    for(i = 0; i < s.length; i++){
      ns+=(criterio(s[i]));
    }
    console.log(ns);
  }
  
  function uperVogal(i) {
    if(i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u'){
      return i.toUpperCase();
    }
    else{
      return i;
    }
  }
  
  function uperConsoante(i) {
    if(i != 'a' && i != 'e' && i != 'i' && i != 'o' && i != 'u'){
      return i.toUpperCase();
    }
    else{
      return i;
    }
  }
  
  function lowVogal(i) {
    if(i == 'A' || i == 'E' || i == 'I' || i == 'O' || i == 'U'){
      return i.toLowerCase();
    }
    else{
      return i;
    }
  }
  
  function lowConsoante(i) {
    if(i != 'A' && i != 'E' && i != 'I' && i != 'O' && i != 'U'){
      return i.toLowerCase();
    }
    else{
      return i;
    }
  }
  
  transform("ola", uperVogal);
  transform("ola", uperConsoante);
  transform("OLA", lowVogal);
  transform("OLA", lowConsoante);