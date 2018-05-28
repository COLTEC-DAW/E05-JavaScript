function cifra(str){
    
    str = str.toUpperCase();

    var correction = "";

    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            correction += String.fromCharCode(str.charCodeAt(i) + 12);
        } else {
            correction += str[i];
        }       
    }
    console.log(correction);
}