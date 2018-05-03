function caesar(str){
  var string = "";
  for(var i =0; i < str.length; i++){
    if(str[i] != " " && str[i] != "!" && str[i] != "?" && str[i] != "."){
      if(str.charCodeAt(i) <= 77)
        string += String.fromCharCode(str.charCodeAt(i) + 13);
      else
        string += String.fromCharCode(str.charCodeAt(i) - 13);

    }else
      string += str[i];
  }

  return string;
}


function cipherCracker(str, func){
  return func(str);
}

cipherCracker("SERR CVMMN!",caesar);
