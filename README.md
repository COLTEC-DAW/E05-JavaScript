**OBS: É importante que você gere um commit para cada parte da atividade que você concluir.**

*Nota: Exercícios retirados/inspirados do livro Eloquent JavaScript, de Marijn Haverbeke.*

# JavaScript: Conceitos Básicos

### Desenhando um triângulo

Implemente um programa em JavaScript que imprima a seguinte forma no console:
```
##
###

####
#####
######
```
OBS: A quantidade de linhas deve ser informada pelo usuário.

### Tabuleiro de Xadrez

Implemente um programa em JavaScript que imprima na página um tabuleiro de xadrez:
```
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
```
OBS: A quantidade de linhas deve ser informada pelo usuário.

### Verificando Palíndromos

Implemente um programa que, dado uma palavra de entrada pelo usuário, verifique se essa palavra é um palíndromo. Um palíndromo é uma palavra que poder ser lida tanto da direita para a esquerda como da esquerda para a direita.

### Um programa diferente...

Escreva um programa que utilize a função console.log para imprimir números de 1 a 100, com duas exceções:

Para números divsíveis por 3: Imprimir Fizz
Para números divisíveis por 5: Imprimir Buzz
Para números divisíveis por 3 e 5: Imprimir FizzBuzz

# JavaScript: Funções

### Mínimo e Máximo

Implemente duas funções JavaScript, uma para retornar o menor valor entre dois elementos (chamada `min(a, b)`), e outra para retornar o maior valor entre dois elementos (chamada `max(a, b)`).

### Recursividade

* Implemente uma função que verifique se um número é divisível por 2. A função deverá se chamar `mod2(number)` e retornar um valor booleano, indicando se o número é ou não divisível.

* Extenda o exercício anterior de modo a criar uma função `mod(num, mod)`, que verifique se num é divisível por mod.

### Contando caracteres

Implemente uma função chamada `countChars(frase, c)` que receba como parâmetro uma string e um caractere e retorne quantas vezes aquele caracteres aparece na string.

# JavaScript: Objetos & Arrays

### Trabalhando com intervalos

* Implemente uma função `range(min, max)` que receba dois números `min` e `max`, e retorne um array contendo todos os números inteiros entre `min` e `max`.

* Adicione um parâmetro na função `range(min, max, i)` que representa o intervalo de variação entre os números a serem preenchidos no array.

### Revertendo um array

Implemente uma função `reverseArray(array)` que receba um array como parâmetro e retorne outro array como reverso.

### Trabalhando com listas

Implemente uma função `toList(array)` que converta o array `array` para uma lista. A lista deverá ter a estrutura abaixo:

```
var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
```

### DeepEquals

Implemente uma função chamada `deepEquals(obj1, obj2)` que verifica se dois objetos quaisquer possuem **as mesmas propriedades**.

*OBS: Você pode, através do próprio JavaScript, iterar sobre cada uma das propriedades existentes de um objeto javascript e seus valores.*

# JavaScript: Funções de Alta Ordem

### Ordenação

Implemente uma função que faça a ordenação de um vetor. O critério de ordenação deverá ser enviado por parâmetro, na forma de função. A ordenação deverá seguir o algoritmo bubble sort.

Teste a ordenação criando critérios de ordenação crescente, descrente, crescente ímpares, decrescente pares.

### Criptografia

Implemente uma função que faça a criptografia de uma determinada string. O critério de criptografia deverá ser enviado por parâmetro, na forma de função.

Teste a criptografia utilizando como critério a [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar).

### Verificando um número

Implemente uma função que faça uma determinada verificação de um número, retornando sempre verdadeiro ou falso. Essa verificação deverá ser enviada como parâmetro, na forma de função.

Teste a função utilizando como verificações se um número é impar, e se um número é primo.

### Transformações em uma String

Implemente uma função que faça transformações nos caracteres de uma string. A transformação a ser realizada deverá ser enviada por parâmetro, na forma de função.

Teste a função passando como parâmetro as seguintes transformações:

* Caixa alta nas vogais
* Caixa alta nas consoantes
* Caixa baixa nas vogais
* Caixa baixa nas consoantes

### Funções Matriciais

Implemente uma função que crie matrizes com base em uma função matricial com base nos índices da matriz. A função matricial deverá ser enviada por parâmetro, na forma de função.

Teste o exercício passando como parâmetro as seguintes funções matriciais:

* `m[i,j] = i + j`
* `[i,j] = i * j`
* `m[i,j] = i == j ? 1 : 0`
* `[i,j] = i^2/(j+1)`
* `m[i,j] = i > j ? 1 : (i < j ? 5 : 0)`