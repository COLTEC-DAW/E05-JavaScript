function impar(num){
    if(num % 2 == 1){
        return true;
    }
    return false;
}
function primo(num){
    for(let i = 2 ;i < num; i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}

function veri(num, func){
    return func(num);
}

console.log(veri(15, primo))
console.log(veri(7, primo))

console.log(veri(15, impar))
console.log(veri(8, impar))