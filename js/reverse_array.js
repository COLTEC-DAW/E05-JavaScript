function reverseArray(array)
{
  let reversed  = []
  let size      = array.length

  for (let i = 0; i < size; i++)
    reversed.push(array[size - i - 1])
  
  return reversed
}

function reverse_array()
{
  let array = prompt('Digite um conjunto de valores separados por virgula:').split(',')
  let rev   = reverseArray(array)

  console.log('Conjunto original:\t' + array)
  console.log('Conjunto invertido:\t' + rev)
}