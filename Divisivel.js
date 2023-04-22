function mod2(number){
    return (number%2==0);
}

function mod(num, modN){
    if(num >= modN){
        return mod((num-modN), modN);
    } else if(num == 0){
        return true;
    } else {
        return false;
    }
}