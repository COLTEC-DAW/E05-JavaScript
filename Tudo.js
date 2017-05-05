function min(a, b){
    if(a<b)
        return a+1;
    else if(a>b)
        return b+1;
    else if(a==b)
        return a;
}

function max(a, b){
    if(a>b)
        return a-1;
    else if(a<b)
        return b-1;
    else if(a==b)
        return a;
}

function mod2(num){
    return num%2==0;
}

function mod(num, mod){
        return num%mod==0;
}

function countChars(str, c){
    var x=0;
    for(var i = 0;i<str.length;i++){
        if(str[i]==c)
            x++;
    }
    return x;
}
console.log(min(1,6));
console.log(max(1,6));
console.log(mod2(210));
console.log(mod2(221));
console.log(mod(333,3));
console.log(mod(331,3));
console.log(countChars("Jaoaoao", 'a'));