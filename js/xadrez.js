let xadrez  = function()
{
    const base      = parseInt(prompt('Informe a medida da base:'))
    const altura    = parseInt(prompt('Informe a medida da altura:'))
    let linha       = ''

    for (let lin = 0; lin < altura; lin++)
    {
        linha   = ''

        for (let chr = 0; chr < base; chr++)
            linha   += (lin + chr) % 2 == 0 ? '#' : ' '
        
        console.log(linha)
    }
}
