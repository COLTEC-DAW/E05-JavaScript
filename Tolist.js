function ToList(array){
    var list = null;
    for (var i = array.length-1; i>=0; i--) {
      list = {value: array[i], rest: list};
    }
    return list;
}