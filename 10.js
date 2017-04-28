function toList (array)
{
    var list = {}
    var temp = list;

    for (var i = 0; i < array.length; i++) 
    {
        temp.value = array[i];
        temp.rest = {};
        temp = temp.rest;
    }
    
    return list;
}

vetor = [1, 2, 3]
var lista = toList (vetor);
console.log(lista);
