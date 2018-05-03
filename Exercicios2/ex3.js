function filter(str, v){
  var arr = str.split("");
  var count = 0;
  
  arr.forEach(function (value){
    if(value == v){
      count++;
      arr.splice(arr.indexOf(value), 1);
    }
  }, v);
  console.log(count)
  return arr.join("");
}

filter("lalala", "a");
