function par(num){
    return num%2 == 0;
}

function primo(num){
    var count = 0;
    for(var i = 2; i <= num/2; i++){
        if(num % i == 0) count ++;
    }
    return count == 0;
}

function checa(num, criterio){
    return criterio(num);
}