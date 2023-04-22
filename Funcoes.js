//Mínimo e Máximo
function min(a,b) {
    if (a < b){
        return a;
    } else{
        return b;
    }
}

function max(a,b) {
    if (a > b){
        return a;
    } else{
        return b;
    }
}
//Recursividade
function mod2(number) {
    if(Number.isInteger( number / 2)){
        return true;
    }else{
        return false;
    }
}

function mod(num, mod) {
    if(Number.isInteger( num / mod)){
        return true;
    }else{
        return false;
    }
}

//Contando caracteres
function countChars(frase, c){
    let char;
    let repete = 0;
    if(frase.length > 0){
        for(let i = 0; i < frase.length; i++){
            char = frase.substring(i, i + 1); 
            if(char === c) {  repete++; }
        }
    }
    return repete;
}

//Implementando funções
console.log(  "Menor valor: " + min(3 , 50) ); //Minimo
console.log(  "Maior valor: " + max(5 , 30) ); //Maximo
console.log(  "333 divisivel por 2 -> " + mod2(333)); //num divisível por 2.
console.log(  "456 divisivel por 6 -> " + mod(456, 6) ); //num divisível por mod.
console.log(  "Letra a é repetida " + countChars("atividade daw", "a") + " vezes" ); //Contando caracteres

