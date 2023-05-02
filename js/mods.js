function div2()
{
        let x   = parseInt(prompt('Digite um numero:'))

        if(mod2(x))
                console.log(x + ' eh divisivel por 2')
        else
                console.log(x + ' nao eh divisivel por 2')
}

function divN()
{
        let x   = parseInt(prompt('Digite um numero:'))
        let y   = parseInt(prompt('Digite outro numero:'))

        if(modN(x, y))
                console.log(x + ' eh divisivel por ' + y)
        else
                console.log(x + ' nao eh divisivel por ' + y)
}

function modN(num, mod)
{
        let diferenca   = num - mod

        if (diferenca > 0)
                return modN(diferenca, mod)
	else
                return diferenca == 0
}

function mod2(number)
{
        let diferenca   = number - 2

        if (diferenca > 0)
                return mod2(diferenca)
	else
                return diferenca == 0
}