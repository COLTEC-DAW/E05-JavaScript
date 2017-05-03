function mod2(num){
    if(num == 0){
        return true;
    }
    else{
        num = num-2;
        if(num < 0) return false
        else return mod2(num);
    }
}
var bol1 = mod2(4);
var bol2 = mod2(5);
console.log(bol1);
console.log(bol2);

function mod(num, mod){
    if(num == 0){
        return true;
    }
    else{
        num = num-mod;
        if(num < 0) return false
        else return mod2(num);
    }
}
var bol3 = mod2(10,5);
var bol4 = mod2(11,5);
console.log(bol3);
console.log(bol4);