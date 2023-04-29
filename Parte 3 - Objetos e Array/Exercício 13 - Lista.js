function toList(array) 
{
    var list = null;
    for (var i = array.length - 1; i >= 0; i--) {
      list = { value: array[i], rest: list };
    }
    return list;
  }

var array = [0,1,2,3,4,5,6,7,8,9];
console.log(toList(array));