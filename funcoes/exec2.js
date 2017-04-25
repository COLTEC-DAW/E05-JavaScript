function mod2(number){
    if(number%2 == 0){
        return true;
    }
    else{
        return false;
    }
}

function mod(num, mod){
    if(num%mod == 0){
        return true;
    }
    else{
        return false;
    }
}

document.write(mod2(5));
document.write("<br>");
document.write(mod(5, 3));