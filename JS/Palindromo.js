var palavra = prompt('Digite uma palavra: ')

var palindromo = palavra.split('').reverse().join('')
    
   // Usei essa função pra fazer e irei explicar abaixo o que cada classe faz

   // split: cria um array e coloca cada letra em uma posição (as aspas simples serve 
   // para que coloque as letras separadas no array, e não apenas a palavra inteira)

   // reverse: serve pra inverter a ordem das posições(letras)

   // join: faz o inverso do split, ele concatena as posições e forma apenas uma 
   // posição(as aspas simples serve para que não coloque nada entre as posições)

    

if (palavra === palindromo) {
    console.log('A Palavra é Palindromo')
} 
else 
{
    console.log('A palavra NÃO é Palindromo')
}