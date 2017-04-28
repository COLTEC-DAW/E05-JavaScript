function reverseArray (array)
{
    var reverse = [];
    var j;
    for (j = array.length - 1; j >= 0; j--)
    {
        reverse.push (array[j]);
    }

    return reverse;
}

var vetor = [1,2,3,4,5];
var novo = reverseArray (vetor);
console.log(novo);
