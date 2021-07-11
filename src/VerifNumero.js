var verificacao = function(number, criterio){
    return criterio(number);
}
var number = 17;
console.log(verificacao(number, function(number){
    if(number%2 != 0){ return true; }
}));
console.log(verificacao(number, function(number){
    for(var i=2; i< number; i++){
        if(number%i == 0){
            return false;
        }
    }
    return true;
}));