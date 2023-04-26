function mod(num){
    if(num < 0){
        return num * -1;
    }
    return num;
}
/*
1  Ordena Crescente
-1 Ordena Decrescente
2 Ordena Crescente Pares
-2 Ordena Decrescente Pares 
3 Ordena Crescente IMpares
-3 Ordena Decrescente Imapres 
*/
function ordena(array, crit){
    let finalArray = [];
    for(let i = 0; i < array.length; i++){
        for(let j = i; j < array.length; j ++){
            tmp = array[j];
            if(crit > 0){
                if(array[i] > tmp){
                    array[j] = array[i];
                    array[i] = tmp;
                }
            }else {
                if(array[i] < tmp){
                    array[j] = array[i];
                    array[i] = tmp;
                }
            }
        }
    }
    for(let i =0; i<array.length; i++){
        if(mod(crit) == 2 && array[i] % 2 == 0){
            finalArray.push(array[i]);
        }else if(mod(crit) == 3 && array[i] % 2 == 1){
            finalArray.push(array[i]);
        }else if(mod(crit) != 2 && mod(crit) != 3){
            finalArray.push(array[i]);
        }

    }
    return finalArray;
}

let x = ordena([5, 44, 12, 9, 0, 3, 15, 6, 11], 2)

console.log(x);