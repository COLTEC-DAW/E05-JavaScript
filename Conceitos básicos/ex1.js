function imprime(num){
  var str = "";

  for(var i = 1; i <= num; i++){
    for(var j = 0; j < i; j++)
      str += "#";
    console.log(str);
    str = "";
  }
}

imprime(12);
