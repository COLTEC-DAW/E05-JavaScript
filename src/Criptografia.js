var criptografia = function(string, criterio){
    var crip = string.split('');
    for(var i=0; i< crip.length; i++){
        crip[i] = criterio(crip[i]);
    }
    return crip.join("");
}
//main
var string = prompt("Digite uma frase:");
var alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","ç"," "];
    
console.log(criptografia(string, function(letra){
    for(var i=0; i< alfabeto.length; i++){
        if(alfabeto[i] == letra){
            break;
        }
    }
    i+=3;
    if(i>27){ i -=27; }
    return alfabeto[i];
}));