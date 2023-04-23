var meu_num = 13;

function forNumber(num, condicao){
    return condicao(num);
}

function verificaImpar(num){
    return !(num % 2) == 0;
}

/*Verifica se um número é ímpar
console.log(forNumber(meu_num, function(a){
    return !(a % 2) == 0;
}));*/
console.log(forNumber(meu_num, verificaImpar));

//Verifica se o número é primo
console.log(forNumber(meu_num, function(a){
        
        var num;
        if(a == 1)
        {   return true;    }
        
        if(verificaImpar(a))
        {   num = (a - 1)/2;    }
        else
        {    num = a/2;    }

        for(i = 2; i <= num; i++){
            if((a % i) == 0){
                return false;
            }   
        }
        return true;
    }));