function intervalo()
{
        let inicio      = parseInt(prompt('Digite o comeco do intervalo:'))
        let fim         = parseInt(prompt('Digite o fim do intervalo:'))

        console.log('Intervalo resultante: ' + range(inicio, fim))
}

function intervalo_i()
{
        let inicio      = parseInt(prompt('Digite o comeco do intervalo:'))
        let fim         = parseInt(prompt('Digite o fim do intervalo:'))
        let variacao    = parseInt(prompt('Digite a variacao do intervalo:'))

        console.log('Intervalo resultante: ' + range_i(inicio, fim, variacao))
}

function range(min, max)
{
        let arr       = []
        
        for (let element = min; element <= max; element++)
                arr.push(element)
        
        return arr
}

function range_i(min, max, i)
{
        let arr       = []
        
        for (let element = min; element <= max; element += i)
                arr.push(element)
        
        return arr
}
