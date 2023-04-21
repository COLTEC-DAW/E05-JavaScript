function min(a,b){
    var menor;
    if(a<b){
        menor=a;
    }else{
        menor=b;
    }
    console.log(`O menor valor é: ${menor}`);
}

function max(a,b){
    var maior;
    if(a>b){
        maior=a;
    }else{
        maior=b;
    }
    console.log(`O maior valor é: ${maior}`);
}

function mod2(number){
    var resultado = number-2;
    if(resultado>1){
        return mod2(resultado);
    }else if(resultado === 1){
        return false;
    }else if(resultado === 0){
        return true
    }
}

min(9,19);
max(20,21);
mod2(149);