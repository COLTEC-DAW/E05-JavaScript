function min_max()
{
        let n1          = parseInt(prompt('Digite um numero:'))
        let n2          = parseInt(prompt('Digite outro numero:'))
        let minimo      = min(n1, n2)
        let maximo      = max(n1, n2)

        console.log('O menor numero eh ' + minimo + ', e o maior eh ' + maximo)
}
function min(a, b)
{
        if (a < b)
                return a
        else
                return b
}

function max(a, b)
{
        if (a > b)
                return a
        else
                return b
}
