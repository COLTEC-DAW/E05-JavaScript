function range(min, max, i) {
  var array = [], count = i-1;
  for(min++; min < max; min++) {
    if(count != i-1){
      count++;
      continue;
    }
    array.push(min);
    count = 0;
  }
  return array;
}

console.log(range(4,20,3));

function reverseArray(array) {
  var newArray = []
  for(i = 0; i < array.length; i++){
    newArray[i] = array[array.length-1-i];
  }
  return newArray;
}

console.log(reverseArray(["1", "2", "3", "4"]));

function toList(array) {
  var list = {};
  first = list;
  for(i = 0; i < array.length; i++) {
    list.value = array[i];
    list.rest = {};
    list = list.rest;
  }
  list.rest = null;
  return first;
}

console.log(toList(["1", "2", "3", "4"]));

function deepEquals(obj1, obj2) {
  var isTrue = false;
  for (propriedade1 in obj1) {
    for (propriedade2 in obj2) {
      if(propriedade1 == propriedade2) {
        isTrue = true;
      }
    }
    if(!isTrue) {
      return false;
    }
    else {
      isTrue = false;
    }
  }
  return true;
}

var objeto1 = {
  value: null,
  value2: null
};

var objeto2 = {
  value: null,
  value2: null
};

var objeto3 = {
  value: null,
  value3: null
};

console.log(deepEquals(objeto1, objeto2));
console.log(deepEquals(objeto1, objeto3));
