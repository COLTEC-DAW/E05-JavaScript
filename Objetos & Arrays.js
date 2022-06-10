function range(min, max, i)
{
    array = []

    for (j = min + 1; j < max; j += i) {array.push(j)}
    return array
}

function reverseArray(array) {return array.reverse()}

function toList(array)
{
    var lista = {}

    if (array.length > 0)
    {
        lista.value = array[0]
        array.shift()

        if (array.length > 0) lista.rest = toList(array)
        else lista.rest = null
    }
    return lista
}

function deepEquals(obj1, obj2)
{
    if (JSON.stringify(obj1) === JSON.stringify(obj2)) return true    
}