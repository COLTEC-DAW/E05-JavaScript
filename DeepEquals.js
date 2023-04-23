function deepEquals(obj1, obj2) {
    
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
    }
    
    for (let prop in obj1) {
      if (typeof obj1[prop] === "object" && typeof obj2[prop] === "object") {
        if (!deepEquals(obj1[prop], obj2[prop])) {
          return false;
        }
      } else if (obj1[prop] !== obj2[prop]) {
        return false;
      }
    }
    return true;
  }
  