function min(a, b) {
  if(a < b){
    return a;
  }
  else{
    return b;
  }
}

function max(a, b) {
  if(a > b){
    return a;
  }
  else{
    return b;
  }
}

console.log(min(2, 3));
console.log(max(2, 3));

function mod2(number) {
  if(number == 1) {
    return true;
  }
  else if(number < 1) {
    return false;
  }
  else{
    return mod2(number/2);
  }
}

function mods(number, divisor) {
  if(number == 1) {
    return true;
  }
  else if(number < 1) {
    return false;
  }
  else{
    return mods(number/divisor, divisor);
  }
}

console.log(mod2(4));
console.log(mods(4,3));

function countChars(frase, c) {
  var count = 0;
  frase = frase.toLowerCase();
  for(i = 0; i < frase.length; i++) {
    if(frase[i] == c) {
      count++;
    }
  }
  return count;
}

console.log(countChars("HELLO WORLD", 'l'));
