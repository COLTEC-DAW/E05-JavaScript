function desenhando_triangulo(tam){

    let desenho = "#", linhas;

    linhas = 1;

    while(linhas <= tam){

        console.log(desenho);
        linhas++;
        desenho += "#";

    }

}

function xadrez(tam){

    let linhas = ["# # # # "], linhas2 = [" # # # #"], i;

    i = 1;

    while (i<=tam){

        if (i % 2 != 0){

            console.log(linhas);

        } else if(i % 2 == 0){

            console.log(linhas2);

        }

    }

}

function palindromos(palavra){

    let palavra2;

    palavra2 = palavra.split('').reverse().join('');

    if(palavra == palavra2){

        console.log("E um palindromo")

    } else if (palavra != palavra2){

        console.log("Nao e um palindromo");

    }

}

function um_cem(){

    for(let i = 1; i <= 100; i++){

        if (i % 3 == 0){
            if(i % 5 == 0){

                console.log("FizzBuzz");

            } else {

                console.log("Fizz");

            }


        } else if (i % 5 == 0){

            console.log("Buzz");

        } else {

            console.log(i);
        
        }

    }

}

function min(a,b){

    if(a<b){

        return a;

    } else if (a>b){

        return b;

    } else if (a == b){

        console.log("os numeros sao iguais");
        return a;
        
    }

}

function max(a,b){

    if(a<b){

        return b;

    } else if (a>b){

        return a;

    } else if (a == b){

        console.log("os numeros sao iguais");
        return a;
        
    }

}

function mod2(number){

    if(number % 2 == 0){

        return true;

    } else{

        return false;

    }

}

function mod(num, mod){

    if (num % mod == 0){

        return true;

    } else {

        return false;

    }

}

function countChars(frase, c){

    let repeticoes;

    repeticoes = (frase.match(/c/g) || []).length;
    
    return repeticoes;    
}

function range(min, max){

    let vet = [];

    while (min < max){

        min++;
        vet.push(min);
        
    }

    return vet;
}

function range(min, max, i){

    let vet = [], contador;

    contador = i;

    while (min < max){

        if(i != 0){

        min++;

        if(contador == i){

        vet.push(min);

            contador = 0;
        } else{

            contador++;
        
        }
        } else {

            while (min < max){

                min++;
                vet.push(min);
                
            }

        }

    }

}

function reverseArray(array){

    array.reverse();

    return array;

}

function toList(array){

    for(let i = 0; i < array.length; i++){

        var list = {
            value: array[i],
            rest: list,
        }

    }
    return list;
}

function deepEquals(obj1, obj2){

    var propriedade_obj1 = Object.getOwnPropertyNames(obj1);
    var propriedade_obj2 = Object.getOwnPropertyNames(obj2);

    if (propriedade_obj1.length != propriedade_obj2.length) {
        return false;
    }

    for (let i = 0; i < propriedade_obj1.length; i++) {

        var nome_propriedade = propriedade_obj1[i];

        if (a[nome_propriedade] !== b[nome_propriedade]) {
            return false;
        }
    }

    return true;
}

function Ordenação(){

    var bubbleSort = function(vetor, ordenacao){

        for(var x = 0; x < vetor.length; x++){

            for( var y = 0; y < vetor.length; y++){

                if(ordenacao(vetor[y], vetor[y + 1])){
                    var z = vetor[y];
                    vetor[y] = vetor [y + 1];
                    vetor[y + 1] = z;
                }
            }
        }
        return vetor;
    }
}

//ordenacoes

function crescente(x,y){

    return(x>y);
}

function decrescente(x, y){

    return (x < y);
}

function crescente_impar(x, y){

    if(x % 2 !== 0){
        
    return (x > y);
    }
}

function decrescente_par(x, y){

    if(x % 2 === 0){
        
        return (x < y);
    }
}

//Fim das ordenações

function criptografia(palavra, criptografia){

    return criptografia(palavra);

}

//Cifra do César

function cifra_do_cesar(palavra){

    var vet1 = palavra.split();

    for(let i = 0; i < vet1.length; i++){

        if (vet1[i] != "a" || vet1[i] != "b" || vet1[i] != "c" || vet1[i] != "d" || vet1[i] != "e" || vet1[i] != "f" || vet1[i] != "g" || vet1[i] != "h" || vet1[i] != "i" || vet1[i] != "j" || vet1[i] != "k" || vet1[i] != "l" || vet1[i] != "m" || vet1[i] != "n" || vet1[i] != "o" || vet1[i] != "p" || vet1[i] != "q" || vet1[i] != "r" || vet1[i] != "s" || vet1[i] != "t" || vet1[i] != "u" || vet1[i] != "v" || vet1[i] != "w" || vet1[i] != "x" || vet1[i] != "y" || vet1[i] != "z"){

            vet1[i] += 3;

        }

    }

    vet1 = vet1.join();

    return vet1;
    
}

//Fim da cifra de césar

function verificando_um_numero(num, parametro){

    var vdd_falso;

    vdd_falso = parametro(num);

    return vdd_falso;    
}

//Parametros

function impar(num){

    if(num % 2 !== 0){

        return true;
    }

        return false;
}

function primo(num){

    let contador;

    for(let i = 1; i <= num; i++){

        if(num % i == 0){

            contador++;

        }

    }

    if(contador == 2){

        return true;        
    } 

        return false;
}

//Fim dos parametros

function muda_string(palavra, mudanca){

    let palavra_final = mudanca(palavra);

    return palavra_final;
}

//Funções para mudar a palavra

function vogal_maiuscula(palavra){

    for(let i = 0; i < palavra.length; i++){

        if(palavra[i] == "a" || palavra[i] == "e" || palavra[i] == "i" || palavra[i] == "o" || palavra[i] == "u"){

            palavra[i] = palavra[i].toUpperCase;
        }
    }

    return palavra;
}

function vogal_minuscula(palavra){

    for(let i = 0; i < palavra.length; i++){

        if(palavra[i] == "A" || palavra[i] == "E" || palavra[i] == "I" || palavra[i] == "O" || palavra[i] == "U"){

            palavra[i] = palavra[i].toLowerCase;
        }
    }

    return palavra;
}

function consoante_maiuscula(palavra){

    for(let i = 0; i < palavra.length; i++){

        if(palavra[i] != "a" || palavra[i] != "e" || palavra[i] != "i" || palavra[i] != "o" || palavra[i] != "u"){

            palavra[i] = palavra[i].toUpperCase;
        }
    }

    return palavra;
}

function consoante_minuscula(palavra){

    for(let i = 0; i < palavra.length; i++){

        if(palavra[i] != "A" || palavra[i] != "E" || palavra[i] != "I" || palavra[i] != "O" || palavra[i] != "U"){

            palavra[i] = palavra[i].toLowerCase;
        }
    }

    return palavra;
}

// Fim das funções para mudar a palavra

function funcoes_matriz(tam, parametro){

    var matriz = [];

    for (var x = 0; x < tam; x++) {

        matriz[x] = [];

        for (var y = 0; y < tam; y++) {
            matriz[x][y] = parametro(x, y);
        }
    }

    return matriz;
}

//Parametros da matriz

function SomaMatriz(x, y) {

    return x + y;
}

function MultMatriz(x, y) {

    return x * y;
}

function BinariosMatriz(x, y) {

    return x == y ? 1 : 0;
}

function ElevarMatriz(x, y) {

    return x ^ (2 / (y + 1));
}

function ContaPeculiar(x, y) {

    return x > y ? 1 : x < y ? 5 : 0;
}

//Fim dos parametros
// Fim da atividade