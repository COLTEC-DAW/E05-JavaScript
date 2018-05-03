function caixaAltaVogais(str) {
  var newStr = "";
  for(var i = 0; i < str.length; i++){
    if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u')
      newStr += str[i].toUpperCase();
    else newStr += str[i];
  }
  return newStr;
}

function caixaAltaConsoantes(str) {
  var newStr = "";
  for(var i = 0; i < str.length; i++){
    if(str[i] != 'a' && str[i] != 'e' && str[i] != 'i' && str[i] != 'o' && str[i] != 'u')
      newStr += str[i].toUpperCase();
    else newStr += str[i];
  }
  return newStr;
}

function caixaBaixaVogais(str) {
  var newStr = "";
  for(var i = 0; i < str.length; i++){
    if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u')
      newStr += str[i].toLowerCase();
    else newStr += str[i];
  }
  return newStr;
}

function caixaBaixaConsoantes(str) {
  var newStr = "";
  for(var i = 0; i < str.length; i++){
    if(str[i] != 'a' && str[i] != 'e' && str[i] != 'i' && str[i] != 'o' && str[i] != 'u')
      newStr += str[i].toLowerCase();
    else newStr += str[i];
  }
  return newStr;
}


function verifica(str, func){
  return func(str);

}
verifica('banana',caixaAltaConsoantes);
