var min = prompt("Digite o mínimo:");
var max = prompt("Digite o maximo:");

function range(min, max)
{
   var intervalo = [max-min];
   var j = 0;
    for(i = min; max >= i; i++)
    {
        intervalo[j]= i;
        j++
    }
    return intervalo;
}
console.log(range(min,max));