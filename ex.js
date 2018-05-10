function triangle(number) {
    var str;
    for (let index = 0; index <= number; index++) {
        for(i = index; i > 0; i--) {
            str += "#";    
        }
        console.log(str);
        str="";
    }
}

//var number = prompt("Digite o número de linhas que o triângulo contém: ");
//triangle(number);

function chess(number) {
    var y = " ";
    var str = "# # # #";
    console.log("");
    for (let index = 0; index < number; index++) {
        if(index % 2 == 0) {
            console.log(str);
        } else {
            console.log(y+str);
        }          
    }
}
//var number = prompt("Digite o número de linhas que o xadrez contém: ");
//chess(number);

function palindrome(word) {
    var arrayWord = word.split('');
    var arrayWordBackwords = word.split('').reverse();
    for (let index = 0; index < arrayWord.length; index++) {
        if (arrayWord[index] !== arrayWordBackwords[index]) {
            return false;
        }
    }      
    return true;
}
//var word = prompt("Digite uma palavra");
//console.log(palindrome(word));

function fizzBuzz() {
    for (let index = 1; index <= 100; index++) {
        if (index%3===0 && index%5===0) {
            console.log("FizzBuzz");
        } else if(index%3===0 ) {
            console.log("Fizz");
        } else if(index%5===0) {
            console.log("Buzz");
        }          
    }
}
//console.log(fizzBuzz());

var max = function (a, b) {
    return a < b ? b : a;
}

var min = function (a, b) {
    return a < b ? a : b;
}

//var number = prompt("Digite dois números separados por vírgula;").split(',');
//console.log("Mínimo" + min(number[0], number[1]));
//console.log("Máximo" + max(number[0], number[1]));

function mod2(number) {
    return number%2===0 ? true : false;
}

function mod(num, mod) {
    if (num - mod == 0) {
        return true;
    } else if (num - mod < 0) {
        return false;
    } else {
        return mod(num-mod, mod);
    }
}

//var number = prompt("Digite dois números separados por vírgula;").split(',');
//console.log(number[0] + " É divisível por 2: " + mod2(number[0]));
//console.log(number[0] + " É divisível por " + number[1] + ":" + mod(number[0], number[1]));

function countChars(frase, c) {
    frase = frase.split('');
    let i = 0;
    for (let index = 0; index < frase.length; index++) {
        if (frase[index] === c) {
            i++;
        }        
    }
    return i;
}

//var frase = prompt("digite uma frase:");
//var c = prompt("digite uma letra: ");
//console.log("Letra: " + c + " encontrada " + countChars(frase, c) + " vezes!"); 

function reverseArray(array) {
    let arrayReversed=[];
    for (let index = array.length-1; index >= 0; index--) {
        console.log(array[index]);
        arrayReversed.push(array[index]);            
    }
    return arrayReversed;
}

//var array = prompt("Digite uma palavra: ").split('');
//console.log(reverseArray(array));

function range(min, max) {
    let array = [];
    for(let i = min+1; i < max; i++) {
        array.push(i);
    }
    return array;
}

function range(min, max, i) {
    let array = [];
    for(let index = min+1; index < max; index+=i) {
        array.push(index);
    }
    return array;
}

//var min_max = prompt("Digite dois números separados por vírgula;").split(',');
//console.log(range(parseInt(min_max[0]), parseInt(min_max[1]), parseInt(min_max[2])));

function toList(array) {
    if (array.length === 0) {
        return null;
    }

    var value = array.shift();

    return {
        value: value,
        rest: toList(array)
    };
}

//console.log(toList([10,20,30,40]));

function deepEquals(obj1, obj2) {
    for (var i in obj1) {
        if (obj1.hasOwnProperty(i) && obj2.hasOwnProperty(i)) {
            if (obj1[i] !== obj2[i]) {
                return false;
            }
        } else {
            return false;
        }
    }

    return true;
}

//var obj1 = {value:20}
//var obj2 = {value:10}
//console.log(deepEquals(obj1, obj2));