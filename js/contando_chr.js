function countChars(expressao, chr)
{
	let ocorrencias	= 0

	for (let c = 0; c < expressao.length; c++)
	{
		if(expressao.charAt(c) == chr)
			ocorrencias++
	}

	return ocorrencias
}

function contando_chr()
{
	let exp	= prompt('Digite uma expressao:')
	let chr	= prompt('Digite um caractere a buscar:')

	console.log('O caractere \'' + chr + '\' aparece ' + countChars(exp, chr) + ' vezes.')
}