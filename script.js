

function triangulo(nLinhas){

    for (let index = 2; index <= nLinhas + 1; index++) {
        let msg = "";
        for (let index2 = 0; index2 < index; index2++) {
            msg += "#";
            
        }
        console.log(msg + "\n");
    }
}


function xadrez(){
    let msg = "";

    k = 0
    for (let i = 1; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
            k++;
            
            if(i % 2 == 0){
                if(k % 2 == 0){
                    msg += "#";
                }else{
                    msg += " ";
                }
            }else{

                if(k % 2 == 0){
                    msg += " ";
                }else{
                    msg += "#";
                }
            }
            
        }
        msg += "\n";
    }
    console.log(msg);
}

function ehPalindromo(palavra) {
    let invertida = palavra.split('').reverse().join('');

    return palavra === invertida;
}

function de0a100(){
    for (let index = 1; index <= 100; index++) {
        if(index % 3 == 0){
            if(index % 5 == 0){
                console.log("FizzBuzz");
            }else{
                console.log("Fizz");
            }
        }else if(index % 5 == 0){
            console.log("Buzz");
            
        }else{
            console.log(index);

        }
        
    }
}


function min(a, b){
    if(a < b){
        return a;
    }else if(b < a){
        return b;
    }else{
        return undefined;
    }
}

function max(a, b){
    if(a > b){
        return a;
    }else if(b > a){
        return b;
    }else{
        return undefined;
    }
}


function mod2(num){
    if(num == 0){
        return true;
    }else if(num == 1){
        return false;
    }else{
        return mod2(num - 2);
    }
}

function mod(num, div){
    if(num == 0){
        return true;
    }else if(num < div){
        return false;
    }else{
        return mod(num - div, div);
    }
}

function countChars(frase, c){
    f = frase.split(c)

    return f.length - 1
}

function range(min, max, i){
    let rang = []
    for (let index = min; index <= max; index = index + i) {
        rang.push(index);
        
    }
    return rang
}


function reverseArray(array){
    let reversedArray = [];

    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    
    return reversedArray;
}

/*
[1,2,3]
{
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
}
*/


function toList(array){

    if (array.length == 0) {
        return null;
    } else {
        return {
          value: array[0],
          rest: toList(array.slice(1))
        };
    }

}

function deepEquals(obj1, obj2){
    for (const prop in obj1){
        if(!obj2.hasOwnProperty(prop)){
            return false
        }
    }

    for (const prop in obj2){
        if(!obj1.hasOwnProperty(prop)){
            return false
        }
    }

    return true
}


function verificaNum(num, func){
    if(func(num)){
        return true
    }else{
        return false
    }
}

function impar(num){
    return num % 2 === 1;
}

function primo(num){
    let i = 0
    for (let index = 1; index <= num; index++) {
        if(num % index === 0){
            i++;
        }
    }

    if(i == 2){
        return true;
    }else{
        return false;
    }
}


console.log( verificaNum(5, impar) );
console.log( verificaNum(5, primo) );
console.log( verificaNum(16, impar) );
console.log( verificaNum(15, primo) );


function ehVogal(char){
    switch (char) {
        case "a":
            return true
            break;
        case "A":
            return true
            break;
        case "e":
            return true
            break;
        case "E":
            return true
            break;
        case "i":
            return true
            break;
        case "I":
            return true
            break;
        case "o":
            return true
            break;
        case "O":
            return true
            break;
        case "u":
            return true
            break;
        case "U":
            return true
            break;
        default:
            return false
            break;
    }
}


function transformaString(str, func){
    s = ""
    for (let index = 0; index < str.length; index++) {
        s += func(str[index]);
    }
    return str;
}

function aumentaVogal(char){
    if(ehVogal(char)){
        return char.toUpperCase()
    }
    return char
}
function aumentaConsoante(char){
    if(!ehVogal(char)){
        return char.toUpperCase()
    }
    return char
}
function diminuiVogal(char){
    if(ehVogal(char)){
        return char.toLowerCase()
    }
    return char
}
function diminuiConsoante(char){
    if(!ehVogal(char)){
        return char.toLowerCase()
    }
    return char
}

console.log( transformaString("teste", aumentaVogal) );
console.log( transformaString("teste", aumentaConsoante) );
console.log( transformaString("TESTE", diminuiVogal) );
console.log( transformaString("TESTE", diminuiConsoante) );
