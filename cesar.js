  function cifraDeCesar(string){
    var strEncrypted = "";

    for(var i = 0; i < string.length; i++){
      if(string[i] != "!" && string[i] != " " && string[i] != "." && string[i] != "?"){

        if(string.charCodeAt(i) <= 77){
            strEncrypted += String.fromCharCode(string.charCodeAt(i) + (Math.random() * (26 - 1) + 1));
        }
        else{
            strEncrypted += String.fromCharCode(string.charCodeAt(i) - (Math.random() * (26 - 1) + 1));
        }

      }else{
        strEncrypted += string[i];
      }
    }
    return strEncrypted;
  }
  
function encrypt(str, criterio){
    return criterio(str);
}

console.log(encrypt("jone jonejonejoneE!", cifraDeCesar));

