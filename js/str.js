function str()
{
    let expressao   = prompt('Digite uma expressao:')

    console.log('Expressao Normal:\t' + expressao)
    console.log('Vogal Minuscula:\t' + transforma_str(expressao, vowelLower))
    console.log('Vogal Maiuscula:\t' + transforma_str(expressao, vowelUpper))
    console.log('Consoante Minuscula:\t' + transforma_str(expressao, consonantLower))
    console.log('Consoante Maiuscula:\t' + transforma_str(expressao, consonantUpper))
}

function transforma_str(expressao, acao)
{
    let nova_exp    = ''

    for (let c = 0; c < expressao.length; c++)
        nova_exp    = nova_exp.concat(acao(expressao.charAt(c)))

    return nova_exp
}

function vowelUpper(chr)
{
    switch(chr.toUpperCase())
    {
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
            return chr.toUpperCase()
        default:
            return chr
    }
}

function vowelLower(chr)
{
    switch(chr.toUpperCase())
    {
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
            return chr.toLowerCase()
        default:
            return chr
    }
}

function consonantUpper(chr)
{
    switch(chr.toUpperCase())
    {
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
            return chr
        default:
            return chr.toUpperCase()
    }
}

function consonantLower(chr)
{
    switch(chr.toUpperCase())
    {
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
            return chr
        default:
            return chr.toLowerCase()
    }
}