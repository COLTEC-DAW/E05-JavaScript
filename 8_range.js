function range(min,max){
    var saida = [];
    for (var conta=min; conta<=max; conta++) saida.push(conta);
    return saida; 
}

function rangeV2(min, max, i){
    var saida = [];
    for (var conta=min; conta <=max; conta+=i) saida.push(conta);
    return saida;
}