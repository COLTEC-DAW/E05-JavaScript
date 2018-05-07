function toList(array){
  var list = {}
    var temp = list
    for (var i = 0; i < array.length; ++i) {
      temp.value = array[i]
        temp.rest = {}
        temp = temp.rest
    }
    return list
}