function map(array, transform) {
    var mapped = [];
    for (var i = 0; i < array.length; i++)
      mapped.push(transform(array[i+2]));
    return mapped;
  }
  
  var vet = ["A", "B", "C", "D", "E", "F", "G", "H"];
  console.log(map(vet, function(person) {
    return person;
  }));