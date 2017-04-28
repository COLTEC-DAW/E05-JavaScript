function verifica (num, criterio)
{
    return criterio(num);
}

function impar (num)
{
    if (num % 2 == 0)
        return false;

    return true;
}

function primo (num)
{
    for (var i = 2; i < num; i++)
    {
        if (num % i == 0)
            return false;
    }

    return true;
}

console.log (verifica (17, impar));
console.log (verifica (18, impar));

console.log (verifica (17, primo));
console.log (verifica (15, primo));