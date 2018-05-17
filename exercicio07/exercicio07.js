const procurado = "a";
const frase = "Mathias Oliveira";

countChars(frase, procurado);

function countChars(frase, c){
    let count = 0;
    for(let i = 0;i < frase.length;i++){
        if(frase.charAt(i)===c){
            count++;
        }
    }
    console.log(count);
}