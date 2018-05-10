function Desenha_triangulo() {
	var trin = document.getElementById('tri');

	for(var i =0;i<=trin.value;i++){  
	    for(var x =0;x<i;x++){  
		  document.write("#");
			}  
			document.write("<br>");
	  }
}

function Tabuleiro_de_xadrez() {
	var xad = document.getElementById('xad');

	for(var x =0;x<xad.value;x++){
		for(var i =0;i<=4;i++){  
			if(x%2 == 0)
				document.write('&nbsp;'+"#")
			else
				document.write("#"+'&nbsp;')
		}
			document.write("<br>")
	}
}

function mostraPalindromo() {
	var str = document.getElementById('palindromo').value;

	var tamanho = str.length;
	str = str.toLowerCase();
	var x = 0;
  
	for (var i =0; i < tamanho; i++) {
	  if (str[i] !== str[tamanho - i-1])
	  x++;                  
		}

	  if(x == 0)
		document.write("É um palindromo");
	  else
		document.write("Não é um palindromo");	
	}

function FizzBuzz(){
	
	for(var i =0;i<=100;i++){
    if(i%15){
      console.log("FizzBuzz");
      }
     else if(i%3 === 0) {
       console.log("Fizz");
       }
       else if(i%5 === 0){
         console.log("Buzz");
         }
         else {
           console.log(i);
           }
  }
}

function min(a,b){
	if(a<b)
	return a;
		else
		return b;
}

function max(a,b){
	if(a>b)
	return a;
		else
		return b;
}

function mod2(number){
	if(number%2 === 0)
	return true;
			else
			return false;
}

function mod(num, mod){
	if(num%mod === 0)
	return true;
			else
			return false;
}

function countChars(frase, c){
	var char_N=0;
	for(i=0;i<frase.length;i++){
		if(c === frase[i]){
			char_N++;
		}
	}
	return(char_N);
}

function range(min,max,i){
  var array = [];
  for(min++;min<max;min=min+i){
    array.push(min);
  }  
  return(array);
}

//ReverseArray #1
function reverseArray(array){
  return array.reverse();
}

//ReverseArray #2
function popArray(array){
  var newArray = [], item =array.length;
   for(var i =0;i<item;i++){
    newArray[i] = array.pop();
  }
  return newArray;
}

function tolist(array) {  
  var list = {
		value: array[0],
		rest: {
			value: array[1],
			rest: {
				value: array[2],
				rest: null
			}
		}
	};
  return list
}

function deepEquals(obj1, obj2){
	if(obj1 === obj2)
	return true
		else
		return false
}