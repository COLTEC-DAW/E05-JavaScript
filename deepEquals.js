function deepEquals(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  if (typeof obj1 !== typeof obj2) {
    return false;
  }

  if (!(obj1 instanceof Object) || !(obj2 instanceof Object) || obj1 === null || obj2 === null) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (!obj2.hasOwnProperty(key) || !deepEquals(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
}

const obj1 = {
    "nome" : "leo",
    "matricula" : "2021951566",
    "idade" : "17",
};

const obj2 = {
    "nome" : "leo",
    "matricula" : "2021951566",
    "idade" : "17",
};

const obj3 = {
    "nome" : "smola",
    "matricula" : "2021951450",
    "idade" : "17",
};

console.log(deepEquals(obj1, obj2));
console.log(deepEquals(obj1, obj3));
