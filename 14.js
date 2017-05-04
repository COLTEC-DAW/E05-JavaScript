function testa(num,metodo){
    return metodo(num);
}

function impar(num){
    if(num%2 != 0){
        return true;
    }
    else{
        return false;
    }
}
function primo(num){
    var controle=true;
    for(i=2;i<num;i++){
        if(num%i == 0){
            controle = false;
        }
    }
    return controle;
}
console.log(testa(9,primo));
console.log(testa(9,impar));
