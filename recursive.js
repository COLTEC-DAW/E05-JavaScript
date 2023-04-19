function mod2(num){
    return(num % 2 == 0);
}

function mod(num, md){

    if(num >= md){
        return mod((num - md), md);
    }else if(num == 0){
        return true;
    }else{
        return false;
    }

}

if(mod(12, 3)){
    console.log("é divisível");
}else{
    console.log("não é divisível");
}
