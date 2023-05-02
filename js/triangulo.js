let triangulo	= function()
{
    const base  = parseInt(prompt('Informe a largura da base:'))
    const ponta = parseInt(prompt('Informe a largura da ponta:'))
    let linha   = ''

    for (let largura = ponta; largura <= base; largura++)
    {
        linha   = ''

        for (let pts = 0; pts < largura; pts++)
            linha   += '#'
        
        console.log(linha)
    }
}
