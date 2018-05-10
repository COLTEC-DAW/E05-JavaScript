function impar(num){
  return num % 2 == 1;
}

function par(num){
  return num % 2 == 0;
}

function primo(num){
  for(var i = 2; i < num; i++){
    if(num % i == 0)
      return false;
  }
  return true;
}

function verifica(num, func){
  return func(num);

}

verifica(4, primo);
