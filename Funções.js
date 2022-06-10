function min(a, b)
{
    if (a < b) return a
    else return b
}

function max(a, b)
{
    if (a < b) return b
    else return a
}

function mod(num, mod)
{
    if (num % mod == 0) return true
    else return false
}

function countChars(frase, c)
{
    n = 0

    for (i = 0; i < frase.length; i++)
    {
        if (frase.charAt(i) == c) n++
    }
    return n
}