// Trabalhando com intervalos
function range01(min, max)
{
    if (min > max) 
    {
        console.log("ERROR - O menor número não pode ser maior que o máximo.");
        return null;
    }
    var vetor = [], i;
    for(i = min; i <= max; i++)
    {
        vetor.push(i);
    }
    return vetor;
}

function range(min, max, i) 
{
    if (min > max) 
    {
        console.log("ERROR - O menor número não pode ser maior que o máximo.");
        return null;
    }
    var vetor = [], j;
    for (j = min + i; j < max; j += i) 
    {
        vetor.push(j);
    }

    return vetor;
}

// Revertendo um array

function reverseArray(vetor)
{
    return vetor.slice().reverse();
}

// Trabalhando com listas

function toList(array)
{
    var lista = {};

    if (array.length > 0)
    {
        lista.value = array[0];
        array.shift();
        if (array.length > 0)
        {
            lista.rest = toList(array);
        }
        else 
        {
            lista.rest = null;
        }
    }
    return lista;
}

// Deep Equals

function DeepEquals(obj1, obj2)
{
    if(Object.keys(obj1).length != Object.keys(obj2).length)
    {
        return false;
    }
    else
    {
        for (let prop in obj1)
        {
            if (prop in obj2)
            {
                continue;
            }
            else
            {
                return false;
            }
        }
        return true;
    }
    

}
var carro = {modelo:"fiesta", cor:"azul"};
var moto = {modelo:"x90", cor:"red"};
console.log(DeepEquals(carro, moto));


