function posicao_final(char, deslocamento){
    var alfabeto = ["a","b","c","d","e","f","g","h"
    ,"i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var aux;
    for(j=0;j<26;j++){
        if(char == alfabeto[j]){
            aux = j;
        }
    }
    var max = 25 - deslocamento;
    if(aux>max){
        aux = (deslocamento-(25-aux));
    }else{
        aux += 3;
    }
    return alfabeto[aux];

}
function criptografia(string, deslocamento){
    var string2 = [];
    var char;
    console.log(string.length); 
    for(i = 0;i<string.length;i++){
        char = posicao_final(string[i], deslocamento);
        string2.push(char);
    }
    string2 = string2.concat();
    console.log(string2);
}

var string = prompt('Digite uma palavra: ');
var deslocamento = prompt('Digite o deslocamento: ');
criptografia(string, deslocamento);