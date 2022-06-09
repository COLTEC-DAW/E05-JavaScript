//Desenhando um triângulo
function imprimeTriangulo(n_linhas){
    for(var i = 1; i <= n_linhas; i++) console.log("#" * i + "\n");
}

//Tabuleiro de Xadrez
function tabuleiroXadrez(n_linhas){
    for(var i = 0; i < n_linhas; i++){ 
        console.log("# " * n_linhas + "\n");
        console.log(" #" * n_linhas + "\n");
    }
}

//Verificando Palíndromos
function checaPalindromo(palavra){
    for(var i = 0; i < palavra.length/2; i++){
        if(palavra[i] != palavra[palavra.length - i - 1]) return false;
    }
    
    return true;
}

//Um programa diferente...
function imprimeSequencia(){
    for(var i = 1; i <= 100; i++){
        if(i % 3 == 0){
           console.log("Fizz");
           if(i % 5 == 0) console.log("Buzz");
        }
        else if(i % 5 == 0) console.log("Buzz");
        else console.log(i);
        console.log("\n");
   }
}