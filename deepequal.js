var deepEqual = function (obj1, obj2) {

    if (obj1 === obj2) {
      return true;
    }

    else if ((typeof obj1 == "object" && obj1 != null) && (typeof obj2 == "object" && obj2 != null)) {
      if (Object.keys(obj1).length != Object.keys(obj2).length){
        return false;
      }
  
      for (var propriedade in obj1){
        if (obj2.hasOwnProperty(propriedade)){  
          if (!deepEqual(obj1[propriedade], obj2[propriedade])){
            return false;
          }
        }
        else{
          return false;
        }
      }
  
      return true;
    }
    else{
      return false;
    }
}

var object1 = {
    nome: "luiz",
    idade: 14
};

var object2 = {
    nome: "luiz",
    idade: 14
};

document.write(deepEqual(object1, object2) + "<br>");