function sorte(array, action){
  return action(array);
}

function Crescente(array){
  var aux;
  for(var i=array.length-1; i>=0; i--){
    for (var y = 1; y <= i; y++){
      if(array[y-1]>array[y]){
        aux = array[y-1];
        array[y-1] = array[y];
        array[y] = aux;
      }
    }
  }
  return array;
}

function Decrescente(array){
  var aux;
  for(var i=array.length-1; i>=0; i--){
    for (var y = 1; y <= i; y++){
      if(array[y-1]>array[y]){
        aux = array[y-1];
        array[y-1] = array[y];
        array[y] = aux;
      }
    }
  }
  array.reverse();
  return array;

}
