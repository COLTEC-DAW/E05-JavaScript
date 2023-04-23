function toList(array) {
    var list = null;
    for (var i = array.length - 1; i >= 0; i--) {
      list = {value: array[i], rest: list};
    }
    return list;
  }
  var array = [1, 2, 3];
  var list = toList(array);
  console.log(list);
  