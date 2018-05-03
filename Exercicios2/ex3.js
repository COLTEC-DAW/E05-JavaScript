function filter(str, v){
  var arr = str.split("");

  arr.forEach(function (value){
    if(value == v){
      arr.splice(arr.indexOf(value), 1);
    }
  }, v);

  return arr.join("");
}
filter("lalala", "a");
