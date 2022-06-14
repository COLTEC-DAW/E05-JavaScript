function paraLista(array){
    var lista = null;
    for (var i = array.length-1; i>=0; i--) {
      lista = {value: array[i], rest: lista};
    }
    return lista;
}