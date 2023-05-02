function diferente()
{
    let inicio  = 1
    let fim     = 100

    for (let num = inicio; num <= fim; num++)
    {
        if(num % 3 == 0 && num % 5 == 0)
            console.log('FizzBuzz')
        else if(num % 3 == 0)
            console.log('Fizz')
        else if(num % 5 == 0)
            console.log('Buzz')
        else
            console.log(num)
    }
}