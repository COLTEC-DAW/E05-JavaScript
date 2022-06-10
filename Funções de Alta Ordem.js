//! TODO: FINALIZAR
console.log(`Ordenação\n`)
function bubbleSort(vet, criterio) 
{
    concluido = 0
    aux = 0
    while (concluido == 0) 
    {
        if (condition)
        {
            
        }
    }
    // Ordenação
    // Implemente uma função que faça a ordenação de um vetor. O critério de ordenação deverá ser enviado por parâmetro, na forma de função. A ordenação deverá seguir o algoritmo bubble sort.
    
    // Teste a ordenação criando critérios de ordenação crescente, descrente, crescente ímpares, decrescente pares.    
}
console.log(`\n`)


console.log(`Encriptação\n`)
function crypt(frase, criterio)
{
    vet = frase.split('')
    chave = Math.floor(Math.random() * 27);

    
    for ( var i = 0; i < vet.length; i++)
    {
        vet[i] = criterio(vet[i], chave);
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
//nice :)
if (testaNum(num, ePrimo)) console.log(`o número ${num} é primo`)
else console.log (`o número ${num} não é primo`)

if (testaNum(num, eImpar)) console.log(`o número ${num} é impar`)
else console.log(`o número ${num} é par`)
console.log(`\n`);

console.log(`Transformação de Strings`);

function stringTransform(frase, transformação)
{
    vet = frase.split('')
    
    for(i = 0; i < vet.length; i++) vet[i] = transformação(vet[i])

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
console.log(`Frase com as todas as vogais minusculas:      ${stringTransform(frase, vogalMinuscula)}`);
console.log(`Frase com as todas as consoantes minusculas:  ${stringTransform(frase, consoanteMaiucula)}`);
console.log(`Frase com as todas as consoantes maiusculas:  ${stringTransform(frase, consoanteMinuscula)}`);


//! TODO: COMEÇAR
function criaMatriz()
{

}
// Funções Matriciais
// Implemente uma função que crie matrizes com base em uma função matricial com base nos índices da matriz. A função matricial deverá ser enviada por parâmetro, na forma de função.

// Teste o exercício passando como parâmetro as seguintes funções matriciais:

// m[i,j] = i + j
// [i,j] = i * j
// m[i,j] = i == j ? 1 : 0
// [i,j] = i^2/(j+1)
// m[i,j] = i > j ? 1 : (i < j ? 5 : 0)