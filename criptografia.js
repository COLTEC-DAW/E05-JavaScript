function hashfunc(str, fact){
     fact = fact%26;

     for(var i = 0;i<str.length;i++){
     
        str[i] = String.fromCharCode((((str.charCodeAt(i))+fact - 97)%26) + 97);
     
     } 
     return str;
};

function encrypt(str, fact, hashfunc){
    return hashfunc(str.toLowerCase(), fact);
};

var str = "Hello World";
var fact = 10;

console.log(encrypt(str, fact, hashfunc));