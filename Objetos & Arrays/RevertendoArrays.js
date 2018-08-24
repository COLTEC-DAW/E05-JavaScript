function reverseArray(array) {
    var newArray = []
    for(i = 0; i < array.length; i++){
      newArray[i] = array[array.length-1-i];
    }
    return newArray;
  }
  
  console.log(reverseArray(["0", "17", "27", "5"]));