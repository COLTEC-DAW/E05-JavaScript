
function deepEquals (obj1, obj2)
{
    for (var key in obj1)
    {
            if (obj1[key] !== obj2[key])
                return false;
    }

    return true;
}

var obj1 = {
    nome: "Carol",
    idade: 17
}

var obj2 = {
    nome: "Junior",
    idade: 54
}

console.log (deepEquals(obj1, obj2));
console.log (deepEquals(obj1, obj1));