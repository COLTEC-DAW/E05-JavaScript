const palavra = prompt('Digite a palavra: ');

function isPalindromo(str) {
  const strReversa = str.split('').reverse().join('');
  return str === strReversa;
}

if (isPalindromo(palavra)) {
  console.log('É um palíndromo.');
} else {
  console.log('Não é um palíndromo.');
}
