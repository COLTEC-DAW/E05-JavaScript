function deepEquals(obj1, obj2){
  var array1 = Object.getOwnPropertyNames(obj1);
  var array2 = Object.getOwnPropertyNames(obj2);

  if(array1==array2){
    return true;
  } else{
    return false;
  }
}
