var min = prompt("Digite o mínimo:");
var max = prompt("Digite o maximo:");
var variacao = prompt("Digite a variação:");

function range(min, max, variacao)
{
    var intervalo = [];
    var j = 0;

    for(i = min; max >= i; i = (i + variacao))
    {
        intervalo[j] = i;
        j++;
    }
    return intervalo;
}

console.log(range(min,max,variacao));