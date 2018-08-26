//Verifica Primo
function comparar(array, combine) {
    for (var i = 0; i < array.length; i++)
      current = combine(array[i]);
    return current;
  }
  
  var vet = [3];
  var result = comparar(vet, function(a) {
        for (var i = 2; i < a; i++)
        if (a % i === 0) return false;
        return a !== 1;
    });
  console.log(result);
            
//Verifica Impar
function comparar(array, combine) {
  for (var i = 0; i < array.length; i++)
    current = combine(array[i]);
  return current;
}

var vet = [1];
var result = comparar(vet, function(a) {
                return a % 2 == 1;
              });
console.log(result);
          