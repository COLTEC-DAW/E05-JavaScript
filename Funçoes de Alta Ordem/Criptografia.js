function criptografia(s, cripto) {
    var sCripto = [];
    for(i = 0; i < s.length; i++) {
      sCripto.push(cripto(s[i]));
    }
    return sCripto;
  }
  
  function criptografar(i){
    if(i == 'x'){
      return 'a';
    }
    else if(i == 'y'){
      return 'b';
    }
    else if(i == 'z'){
      return 'c';
    }
    if(i == 'X'){
      return 'A';
    }
    else if(i == 'Y'){
      return 'B';
    }
    else if(i == 'Z'){
      return 'C';
    }
    return String.fromCharCode(i.charCodeAt(0) + 3);
  }
  
  console.log(criptografia("OLA", criptografar));