function range (min, max, inter)
{
    var vetor = [];

    if (max - min > inter)
    {
        var j = 0;

        for (var i = min + 1, j=0; j < inter; i++, j++)
            vetor.push (i);
    }

    else
    {
        for (var i = min + 1; i < max; i++)
        {
            vetor.push(i);
        }
    }

    return vetor;
}

var v1 = range (1, 10, 2);
var v2 = range (1, 10, 8);
var v3 = range (1, 10, 10);

console.log (v1);
console.log (v2);
console.log (v3);