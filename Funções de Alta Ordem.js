console.log(`Ordenação\n`)

function bubbleSort(vetor, criterio)
{
    terminou = false
    while (terminou == false) 
    {   
        aux = vetor.slice(0) //se eu só fizer aux = vetor, aux vai ter o ponteiro para vetor e não os valores >:(

        for (var i = 0; i < vetor.length - 1; i++)
        {
            vetor = criterio(vetor, i)
        }
        if (JSON.stringify(aux) == JSON.stringify(vetor)) terminou = true
    }
    return vetor
}

function criterioCrescente(vet, i) 
{
    var aux
    if (vet[i] > vet[i+1]) 
    {
        aux =  vet[i+1]
        vet[i+1] = vet[i]
        vet[i] = aux
        return vet
    }else return vet
}

function criterioDecrescente(vet, i) 
{
    var aux
    if (vet[i] < vet[i+1]) 
    {
        aux =  vet[i+1]
        vet[i+1] = vet[i]
        vet[i] = aux
        return vet
    }else return vet
}

function criterioImparCrescenteParDescrescente(vet, i) 
{
    if ((vet[i] % 2 == 0) && (vet[i+1] % 2 == 0))
    {
        criterioDecrescente(vet, i)
        return vet
    }
    else if ((vet[i] % 2 != 0) && (vet[i+1] % 2 != 0)) 
    {
        criterioCrescente(vet, i)
        return vet
    }
    else if ((vet[i] % 2 != 0) && (vet[i+1] % 2 == 0))
    {
        return vet
    }
    else if ((vet[i] % 2 == 0) && (vet[i+1] % 2 != 0))
    {
        aux =  vet[i+1]
        vet[i+1] = vet[i]
        vet[i] = aux
        return vet
    }

    return vet
}
//nice :)   
desordenado = [3,7,2,8,6,1,4,5]

console.log(`lista que será ordenada:                                      ${desordenado}`)
console.log(`lista ordenada de forma crescente                             ${bubbleSort(desordenado, criterioCrescente)}`)
console.log(`lista ordenada de forma decrescente                           ${bubbleSort(desordenado, criterioDecrescente)}`)
console.log(`lista ordenada de forma crescente ímpares e decrescente pares ${bubbleSort(desordenado, criterioImparCrescenteParDescrescente)}`)
console.log(`\n`)


console.log(`Encriptação\n`)

function crypt(frase, criterio)
{
    vet = frase.split('')
    chave = Math.floor(Math.random() * 27)

    
    for ( var i = 0; i < vet.length; i++)
    {
        vet[i] = criterio(vet[i], chave)
    }
    return (vet.join(''))
}

function cifraCezar(caractere, chave)
{
    if (caractere.toUpperCase().charCodeAt(0) + chave <= 90) 
    {
        return String.fromCharCode(caractere.charCodeAt(0) + chave)
    }else return String.fromCharCode(caractere.charCodeAt(0) + chave - 26)
}

texto = `Enzozozo`
console.log(`Texto a ser encriptado: ${texto}`)
console.log(`Texo encriptado: ${crypt(texto, cifraCezar)}`)
console.log(`\n`)


console.log(`Verificação de número\n`)

function testaNum(num, condicao) {return condicao(num)}

function ePrimo(num) 
{
    for (i = 2; i < num; i++)
    {
        if (num % i == 0) return false
    }
    return true
}
function eImpar(num) 
{
    if (num % 2 == 0) return false
    else return true
}

num = Math.floor(Math.random() * 10 + 1 )

if (testaNum(num, ePrimo)) console.log(`o número ${num} é primo`)
else console.log (`o número ${num} não é primo`)

if (testaNum(num, eImpar)) console.log(`o número ${num} é impar`)
else console.log(`o número ${num} é par`)
console.log(`\n`)


console.log(`Transformação de Strings\n`)

function stringTransform(frase, transformação)
{
    vet = frase.split('')
    
    for (i = 0; i < vet.length; i++) vet[i] = transformação(vet[i])

    return vet.join('')
}

const vogais = ['a','e','i','o','u','A','E','I','O','U']

function vogalMaiuscula(letra)
{
    if (vogais.includes(letra) == true) return letra.toUpperCase()
    else return letra
}

function consoanteMaiucula(letra)
{
    if (vogais.includes(letra) == false) return letra.toUpperCase()
    else return letra
}

function vogalMinuscula(letra)
{
    if (vogais.includes(letra)) return letra.toLowerCase()
    else return letra
}

function consoanteMinuscula(letra) 
{
    if (vogais.includes(letra) == false) return letra.toLowerCase()
    else return letra
}

frase = `Javascript NÃO é de Deus não!`
console.log(`A frase que será transformada é:              ${frase}\n`)
console.log(`Frase com as todas as vogais maiusculas:      ${stringTransform(frase, vogalMaiuscula)}`)
console.log(`Frase com as todas as vogais minusculas:      ${stringTransform(frase, vogalMinuscula)}`)
console.log(`Frase com as todas as consoantes minusculas:  ${stringTransform(frase, consoanteMaiucula)}`)
console.log(`Frase com as todas as consoantes maiusculas:  ${stringTransform(frase, consoanteMinuscula)}`)
console.log(`\n`)


console.log(`Funções Matriciais\n`)

function funçãoMatricial1(i, j) 
{
    val = i + j
    return val
}

function funçãoMatricial2(i, j) 
{
    val = i * j
    return val
}

function funçãoMatricial3(i, j) 
{
    val = i == j ? 1 : 0
    return val
}

function funçãoMatricial4(i, j) 
{
    val = i^2/(j+1)
    return val
}

function funçãoMatricial5(i, j) 
{
    val = i > j ? 1 : (i < j ? 5 : 0)
    return val
}

matriz = [[0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0]]

function criaMatriz(matriz, criterioCriação)
{
    for (i = 0; i < matriz.length; i++) 
    {
        for (j = 0; j < matriz[0].length; j++)
        {
            matriz[i][j] = criterioCriação(i, j)
        }
        console.log(matriz[i])
    }
    return matriz
}

console.log(`Resultado função1`)
matriz = criaMatriz(matriz, funçãoMatricial1)

console.log(`Resultado função2`)
matriz = criaMatriz(matriz, funçãoMatricial2)

console.log(`Resultado função3`)
matriz = criaMatriz(matriz, funçãoMatricial3)

console.log(`Resultado função4`)
matriz = criaMatriz(matriz, funçãoMatricial4)

console.log(`Resultado função5`)
matriz = criaMatriz(matriz, funçãoMatricial5)

console.log(`FIM`)