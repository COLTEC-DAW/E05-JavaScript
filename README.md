**OBS: É importante que você gere um commit para cada parte da atividade que você concluir.**

*Nota: Exercícios retirados/inspirados do livro Eloquent JavaScript, de Marijn Haverbeke.*

**OBS: Todos os exercícios foram feitos e podem ser rodados no [JS.do](https://js.do)

# JavaScript: Conceitos Básicos, feito por Gustavo de Paula

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

#### Resposta:
```javascript
var linhas = prompt("Numero de linhas", 6)

for (i = 0; i < linhas; ++i){
	for (j = 0; j < i+1; ++j){
		document.write('#')
	}
	document.writeln("<br>")
}
```

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

#### Resposta:
```javascript
var linhas = prompt("Numero de linhas", 8)

for (var i = 0; i < linhas; ++i){
    var HorS = (i%2 == 0) // Hashtag or Space
	for (var j = 0; j < linhas-1; ++j){
        document.write(HorS ? '#' : '&nbsp;')

		if (j == linhas-2){
            document.write(HorS ? '&nbsp;' : '#')
			++j 
			break
		}

        document.write(HorS ? '&nbsp;' : '#')
        ++j
	}
	document.writeln("<br>")
}
```


### Verificando Palíndromos

Implemente um programa que, dado uma palavra de entrada pelo usuário, verifique se essa palavra é um palíndromo. Um palíndromo é uma palavra que poder ser lida tanto da direita para a esquerda como da esquerda para a direita.

#### Resposta:
```javascript
var palavra = prompt("É Palindromo?", "arara")
document.write((palavra.split('').reverse().join('') == palavra) ? 'É Palindromo' : 'Num é Palindromo')
```

### Um programa diferente...

Escreva um programa que utilize a função ~~console.log~~ document.write para imprimir números de 1 a 100, com duas exceções:

Para números divsíveis por 3: Imprimir Fizz
Para números divisíveis por 5: Imprimir Buzz
Para números divisíveis por 3 e 5: Imprimir FizzBuzz
#### Resposta:
```javascript
for (var i = 0; i < 100; ++i) {
	if (i%3 == 0) document.write('Fizz')
    if (i%5 == 0) document.write('Buzz')
    if (i%3 != 0 && i%5 != 0) document.write(i)
    document.write('<br>')
}
```

# JavaScript: Funções

### Mínimo e Máximo

Implemente duas funções JavaScript, uma para retornar o menor valor entre dois elementos (chamada `min(a, b)`), e outra para retornar o maior valor entre dois elementos (chamada `max(a, b)`).

#### Resposta:
```javascript
function min(a, b) {
	return (a<b ? a : b)
}

function max(a, b) {
	return (a>b ? a : b)
}
```

### Recursividade

* Implemente uma função que verifique se um número é divisível por 2. A função deverá se chamar `mod2(number)` e retornar um valor booleano, indicando se o número é ou não divisível.

* Extenda o exercício anterior de modo a criar uma função `mod(num, mod)`, que verifique se num é divisível por mod.

#### Resposta
```javascript
function mod2(num){
	return num%2 == 0
}
function mod(num,mod){
	return num%mod == 0
}
```

### Contando caracteres

Implemente uma função chamada `countChars(frase, c)` que receba como parâmetro uma string e um caractere e retorne quantas vezes aquele caracteres aparece na string.

```javascript
function countChars(frase, c) {
    var letras = frase.split('').filter(function(letra){
    	return letra == c
    })
    return letras.length
}
```

# JavaScript: Objetos & Arrays

### Trabalhando com intervalos

* Implemente uma função `range(min, max)` que receba dois números `min` e `max`, e retorne um array contendo todos os números inteiros entre `min` e `max`.

* Adicione um parâmetro na função `range(min, max, i)` que representa o intervalo de variação entre os números a serem preenchidos no array.

#### Resposta
```javascript
function range(min, max){
  var vetor = []
    for (var i = min; i <= max; ++i){
      vetor.push(i)
    }
    return vetor;
}
```
```javascript
function range(min, max, i){
  var vetor = []
    for (var cont = min; cont <= max; cont+=i){
      vetor.push(cont)
    }
    return vetor;
}
```

### Revertendo um array

Implemente uma função `reverseArray(array)` que receba um array como parâmetro e retorne outro array como reverso.

#### Resposta
```javascript
function reverseArray(array){
  var reversed = []
    for (i = 0; i <= array.length+1; ++i){
      reversed.push(array.pop())
    }
    return reversed
}
```

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

#### Resposta
```javascript
function toList(array){
  var list = {}
    var temp = list
    for (var i = 0; i < array.length; ++i) {
      temp.value = array[i]
        temp.rest = {}
        temp = temp.rest
    }
    return list
}
```

### DeepEquals

Implemente uma função chamada `deepEquals(obj1, obj2)` que verifica se dois objetos quaisquer possuem **as mesmas propriedades**.

#### Resposta
```javascript
function deepEquals(obj1, obj2){
  return ob1 === obj2
}
```

*OBS: Você pode, através do próprio JavaScript, iterar sobre cada uma das propriedades existentes de um objeto javascript e seus valores.*

# JavaScript: Funções de Alta Ordem

### Ordenação

Implemente uma função que faça a ordenação de um vetor. O critério de ordenação deverá ser enviado por parâmetro, na forma de função. A ordenação deverá seguir o algoritmo bubble sort.

Teste a ordenação criando critérios de ordenação crescente, descrente, crescente ímpares, decrescente pares.

#### Resposta
```javascript
function bubbleSort(array, criterio){
  for (var i = 1; i < array.length; ++i) {
    for(var j = 0; j < (array.length-1); ++j){
      // troca quando criterio == true
      if (criterio(array,j)){
        var temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  return array;
}

function crescente(array,i){
  return (array[i] > array[i+1]) ? true : false ;
}
function decrescente(array,i){
  return (array[i] < array[i+1]) ? true : false;
}
function crescenteImpar(array,i){
  return (array[i] > array[i+1] && array[i]%2!=0)? true : false;
}
function decrescentePar(array,i){
  return (array[i] < array[i+1] && array[i]%2==0)? true : false;
}

var array = bubbleSort([4,2,6,7,9,1,3,5],crescente)
console.log(bubbleSort(array,crescente));
console.log(bubbleSort(array,decrescente));
console.log(bubbleSort(array,crescenteImpar));
console.log(bubbleSort(array,decrescentePar););
```

### Criptografia

Implemente uma função que faça a criptografia de uma determinada string. O critério de criptografia deverá ser enviado por parâmetro, na forma de função.

Teste a criptografia utilizando como critério a [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar).

#### Resposta
```javascript
function criptografar (string, criptografia) {
  return string.split('').map(criptografia)
}

caeserCipher = function  (text){
  // ele irá criptografar o char sendo que a key da cifra = 3
  // restrição da função: deve ser letra maiúscula
  var criptografado = String.fromCharCode(text.charCodeAt(0) + 3) 
  if (criptografado.charCodeAt(0) > 90){
    criptografado = String.fromCharCode(65 + (90 - criptografado.charCodeAt(0)))
  }
  return criptografado
}
```

### Verificando um número

Implemente uma função que faça uma determinada verificação de um número, retornando sempre verdadeiro ou falso. Essa verificação deverá ser enviada como parâmetro, na forma de função.

Teste a função utilizando como verificações se um número é impar, e se um número é primo.

#### Resposta

```javascript
verificacao = function (number, f){
  return f(number)
}

// https://en.wikipedia.org/wiki/Prime_number#Trial_division
prime = function (n){
  for (i = 2; i <= Math.sqrt(n); ++i){
    if (n%i==0) return false
  }
  // o numero 1 passa no for acima, porém n é primo
  return n>1?true:false
}

console.log(verificacao(6, n => n%2 == 0))
console.log(verificacao(11, prime))
```

### Transformações em uma String

Implemente uma função que faça transformações nos caracteres de uma string. A transformação a ser realizada deverá ser enviada por parâmetro, na forma de função.

Teste a função passando como parâmetro as seguintes transformações:

* Caixa alta nas vogais
* Caixa alta nas consoantes
* Caixa baixa nas vogais
* Caixa baixa nas consoantes

#### Resposta
```javascript
var vogaisUp = function(letra){
  return (/^[aeiou]$/).test(letra)? letra.toUpperCase() : letra
}
var consoantesUp = function(letra){
  return !(/^[aeiou]$/i).test(letra)? letra.toUpperCase() : letra
}
var vogaisDown = function(letra){
  return (/^[AEIOU]$/).test(letra)? letra.toLowerCase() : letra
}
var consoantesDown = function(letra){
  return (/^[aeiou]$/i).test(letra)? letra.toLowerCase() : letra
}
var transformaChars = function(frase,metodo){
    return (frase).split('').map(metodo).toString().replace(/,/g, '')
}
```

### Funções Matriciais

Implemente uma função que crie matrizes com base em uma função matricial com base nos índices da matriz. A função matricial deverá ser enviada por parâmetro, na forma de função.

Teste o exercício passando como parâmetro as seguintes funções matriciais:

* `m[i,j] = i + j`
* `[i,j] = i * j`
* `m[i,j] = i == j ? 1 : 0`
* `[i,j] = i^2/(j+1)`
* `m[i,j] = i > j ? 1 : (i < j ? 5 : 0)`

#### Resposta
```javascript
var soma = ((i,j) => i+j)
var mult = ((i,j) => i*j)
var igual = ((i,j) => (i == j ? 1 : 0))
var funct4 = ((i,j) => ((i*i)/(j+1)))
var funct5 = ((i,j) => ( i > j ? 1 : (i < j ? 5 : 0)))

function matriz(a,b,funcao){
  var matriz=[[],[]];

  for(var i=0;i<a;i++){
    for(j=0;j<b;j++){
      matriz[i][j] = funcao(i,j);
    }
  }
  return matriz;
}

console.log(matriz(2, 2, soma));
```