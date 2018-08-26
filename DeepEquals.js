function deepEquals(obj1, obj2){
      var a1 = Object.getOwnPropertyNames(obj1);
      var a2 = Object.getOwnPropertyNames(obj2);
    
      if(a1==a2){
        return true;
      } else{
        return false;
      }
}