var dividendo = prompt("Insira o dividendo: ");
var funcao = prompt("Você deseja saber se o número é divisivel por 2 (digite1) ou por um número de sua escolha (digite2)? ");

chamaFuncao(funcao, dividendo);

function chamaFuncao(funcao, dividendo){
    if(funcao==1){
        let resposta = mod2(dividendo);
        console.log(resposta);

    }else{
        if(funcao==2){
            var divisor=prompt("Insira o número do divisor: ");
            let resposta = mod(dividendo, divisor);
            console.log(resposta);
        }else{
            console.log("Opção não disponível");
        }
    }
}

function mod2(dividendo){
    if (dividendo%2 ==0){
        return true;
    }else{
        return false;
    }
}

function mod(dividendo, divisor){
    if (dividendo%divisor ==0){
        return true;
    }else{
        return false;
    }
}