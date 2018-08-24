function mod2(number) {
    if(number%2 == 0) {
      return true;
    }
    else{
      return false;
    }
  }

function mod(num, mod){
    if(num%mod == 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(mod2(10));
console.log(mod(10, 7));