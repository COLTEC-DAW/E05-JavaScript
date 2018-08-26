//Decrescente
function filter(array, test) {
    var passed = [];
    for (var i = array.length; i >= 0; i--) {
      if (test(array[i]))
        passed.push(array[i]);
    }
    return passed;
  }
  
  var vet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var result = filter(vet, function(Decrescente) {
    return Decrescente;
  });
  console.log(result);


//Decrescente Pares
function filter(array, test) {
    var passed = [];
    for (var i = array.length; i >= 0; i--) {
      if (test(array[i]))
        passed.push(array[i]);
    }
    return passed;
  }
  
  var vet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var result = filter(vet, function(DecrescentePares) {
    return DecrescentePares % 2 == 0;
  });
  console.log(result);


//Crescente 
function filter(array, test) {
    var passed = [];
    for (var i = 0; i < array.length; i++) {
      if (test(array[i]))
        passed.push(array[i]);
    }
    return passed;
  }
  
  var vet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var result = filter(vet, function(Crescente) {
    return Crescente;
  });
  console.log(result);


//Crescente Impares
function filter(array, test) {
    var passed = [];
    for (var i = 0; i < array.length; i++) {
      if (test(array[i]))
        passed.push(array[i]);
    }
    return passed;
  }
  
  var vet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var result = filter(vet, function(CrescenteImpares) {
    return CrescenteImpares % 2 == 1;
  });
  console.log(result);