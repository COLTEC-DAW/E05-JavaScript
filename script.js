// Parte I: Desenhando um triângulo
function Triangulo(NLinhas){
    for(var i=1;i<=NLinhas;i++){
        var aux = "";
        for(var j=0; j<i; j++){
            aux += "#";
        }
        console.log(aux);
    }
}

// Parte II: Tabuleiro de Xadrez
function Tabuleiro(NLinhas, NColunas){
    for(var i=0;i<NLinhas;i++){
        var aux = "";
        if(i!=0 && i%2!=0){
            aux += " ";
        }
        for(var j=0;j<NColunas;j++){
            aux += "# ";
        }
        console.log(aux);
    }
}

// Parte III: Verificando Palíndromos
function Palindromo(alvo){
    var EhPalindromo = true;
    var Alvo = alvo.replace(/\s+/g, '').split('');
 
    for(var i=0,j=(Alvo.length-1);i<Alvo.length;i++,j--){
        if(Alvo[i] != Alvo[j]){
            EhPalindromo = false;
            break;
        }
    }

    return EhPalindromo;
}

// Parte IV: Um programa diferente...
function Anormal(){
    for(var i=1;i<=100;i++){
        if(i%3 == 0 && i%5 == 0){
            console.log("FizzBuzz");
        }else if(i%3 == 0){
            console.log("Fizz");
        }else if(i%5 == 0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
}

// Parte V: Mínimo e Máximo
function min(a,b){
    return ((a<b) ? a:b);
}
function max(a,b){
    return ((a>b) ? a:b);
}

// Parte VI: Recursividade
function mod2(number){
   return mod(number,2);
}
function mod(number, mod){
    return (number%mod == 0) ? true:false;
}

// Parte VII: Contando caracteres
function countChars(frase, c){
    var count = 0;
    frase = frase.split('');
    
    for(var i=0;i< frase.length;i++){
        if(frase[i] == c){
            count++;
        }
    }

    return count;
}

// Parte VIII: Trabalhando com intervalos
function range(min,max){
    var array = [];

    for(var i=min;i<=max;i++) array.push(i);

    return array;
}
function range(min,max,i){
    var array = [];

    for(var j=min;j<=max;j+=i) array.push(j);

    return array;
}

// Parte IX: Revertendo um array
function reverseArray(array){
    var newArray = [];

    for(var i=(array.length-1);i>=0;i--) newArray.push(array[i]);

    return newArray;
}

// Parte X: Trabalhando com listas
function toList(array){
    var lista = null;

    for(var i=0;i<array.length;i++){
        var obj = {};
        obj.value = array[i];
        obj.rest = lista;
        lista = obj;
    }

    return lista;
}

// Parte XI: DeepEquals
function deepEquals(obj1,obj2){
    var equal;

    for(var i in obj1){
        equal = true;
        for(var j in obj2){
            equal = false;
            if(i==j){
                equal = true;
                break;
            }
        }
        if(!equal)break;
    }

    return equal;
}