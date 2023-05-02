function ehPalindromo(expressao)
{
    let ehPalindromo    = true
    let tamanho         = expressao.length

    for (let chr = 0; chr < tamanho; chr++)
		  ehPalindromo    = ehPalindromo && (expressao[chr] == expressao[(tamanho - 1) - chr])

        return ehPalindromo
}

function palindromo()
{
  let expressao = prompt('Digite uma expressao:')

  console.log(ehPalindromo(expressao))
}