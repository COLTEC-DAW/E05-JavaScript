function hashfunc(str, fact) {
	if(str == 32) return str;

	str += fact;
	return (str >= 65 && str <= 90 || str >= 97 && str <= 122) ? str : str - 26;
}

function encrypt(str, fact, hashfunc){
    var msg = "";

    fact = fact%26;

    for(var i=0;i<str.length;i++){
        msg += String.fromCharCode(hashfunc(str.charCodeAt(i), fact));
    }

    return msg;
};

var str = "Hello World";
var fact = 10;

console.log(encrypt(str, fact, hashfunc));