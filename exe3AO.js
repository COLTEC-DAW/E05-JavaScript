
//consoante caixa alta & volgal caixa baixa
function trans(s, upper, cons) {
    var transform = "";
        for (var i = 0; i < s.length; i++) {
            if (cons(s[i])) {
                transform += upper(s[i]);
            } else {
                transform += s[i];
            }
        }
    return transform;
}

var lower = function (s) {
    return s.toLowerCase();
}
 var upper = function (s) {
    return s.toUpperCase();
}
 var cons = function(s) {
    return s != 'a' && s != 'e' && s != 'i' && s != 'o' && s != 'u'; 
}
 var vogal = function(s) {
    return s == 'a' || s == 'e' || s == 'i' || s == 'o' || s == 'u'; 
}

console.log(trans("abcdefghijklmnopqrstuvwxyz", upper, cons));
     


//vogal caixa alta & consoante caixa baixa
function trans(s, upper, vogal) {
    var transform = "";
        for (var i = 0; i < s.length; i++) {
            if (vogal(s[i])) {
                transform += upper(s[i]);
            } else {
                transform += s[i];
            }
        }
    return transform;
}

var lower = function (s) {
    return s.toLowerCase();
}
 var upper = function (s) {
    return s.toUpperCase();
}
 var cons = function(s) {
    return s != 'a' && s != 'e' && s != 'i' && s != 'o' && s != 'u'; 
}
 var vogal = function(s) {
    return s == 'a' || s == 'e' || s == 'i' || s == 'o' || s == 'u'; 
}

console.log(trans("abcdefghijklmnopqrstuvwxyz", upper, vogal));
     