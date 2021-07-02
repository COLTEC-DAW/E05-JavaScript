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