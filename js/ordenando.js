function ordenando()
{
        let array       = prompt('Digite um conjunto de inteiros separados por virgula:').split(',')

        array   = array.map((num) => parseInt(num))

        bubbleSort(array, ascending_odd_first)
        console.log('Ordem crescente impares: ' + array)
        bubbleSort(array, descending_even_first)
        console.log('Ordem decrescente pares: ' + array)
}
function descending_even_first(a, b)
{
        if(a % 2 == 0 && b % 2 != 0)
                return -1
        else if(a % 2 != 0 && b % 2 == 0)
                return +1
        else
                return b - a
}

function ascending_odd_first(a, b)
{
        if(a % 2 == 0 && b % 2 != 0)
                return +1
        else if(a % 2 != 0 && b % 2 == 0)
                return -1
        else
                return a - b
}

function bubbleSort(vetor, criterio)
{
        let tamanho     = vetor.length
        let tmp
      
        for (let i = 0; i < (tamanho - 1); i++)
        {
          for (let j = (tamanho - 1); j > i; j--)
          {
            if (criterio(vetor[j - 1], vetor[j]) > 0)
            {
              tmp = vetor[j];
              vetor[j] = vetor[j - 1];
              vetor[j - 1] = tmp;
            }
          }
        }
}
