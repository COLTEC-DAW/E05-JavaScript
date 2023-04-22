function deepEquals(obj1, obj2) {
    if (typeof obj1 === "object" && typeof obj2 === "object") {
      if (obj1 === null && obj2 === null)
        return true;
  
      if (obj1 === null || obj2 === null)
        return false;
  
      if (Object.keys(obj1).length !== Object.keys(obj2).length)
        return false;
  
      for (let prop in obj1) {
        if (!deepEquals(obj1[prop], obj2[prop]))
          return false;
      }
      return true;
    }
    return obj1 === obj2;
  }

  let obj1 = {
    nome: "Raphael",
    idade: 30,
  };

  let obj2 = {
    nome: "Raphael",
    idade: 30,
  };

  console.log(deepEquals(obj1, obj2))