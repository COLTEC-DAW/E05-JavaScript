function ehDivisivel(x){
    if(x == 1)
        return true;
    else if(x % 2 == 0){
        ehDivisivel(x/2);
    }
    else{
        return false;
    }
}