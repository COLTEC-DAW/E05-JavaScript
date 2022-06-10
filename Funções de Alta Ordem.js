//! FINALIZAR
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

function crypt(frase, criterio)
{
    vet = frase.split('');
    chave = Math.floor(Math.random() * 27);

    
    for ( var i = 0; i < vet.length; i++)
    {
        vet[i] = criterio(vet[i], chave);
    }
    return (vet.join())
}

function cifraCezar(caractere, chave)
{
    if (caractere.toUpperCase().charCodeAt(0) + chave <= 90) 
    {
        return String.fromCharCode(caractere.charCodeAt(0) + chave)
    }else{return String.fromCharCode(caractere.charCodeAt(0) + chave - 26)}
}

console.log("Texo encriptado: " + crypt('Enzozozozo', cifraCezar));




//! FINALIZAR
function testaNum(condicao) {return condicao(num)}

num = 5


//!COMEÇAR
function stringTransform()
{
// Transformações em uma String
// Implemente uma função que faça transformações nos caracteres de uma string. A transformação a ser realizada deverá ser enviada por parâmetro, na forma de função.

// Teste a função passando como parâmetro as seguintes transformações:

// Caixa alta nas vogais
// Caixa alta nas consoantes
// Caixa baixa nas vogais
// Caixa baixa nas consoantes
}

//!COMEÇAR
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