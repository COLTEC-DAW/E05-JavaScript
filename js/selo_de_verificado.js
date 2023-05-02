function verificar(num, criterio)
{
        return criterio(num)
}

function ehImpar(num)
{
        return num % 2 != 0
}

function ehPrimo(num)
{
        for (let i = 2; i <= Math.sqrt(num); i++)
        {
                if(num % i == 0)
                        return false
        }

        return true
}

function selo_de_verificado()
{
        let num = parseInt(prompt('Digite um numero natural:'))

        if(ehImpar(num))
                console.log(num + ' eh impar')
        else
                console.log(num + ' nao eh impar')

        if(ehPrimo(num))
                console.log(num + ' eh primo')
        else
                console.log(num + ' nao eh primo')

}