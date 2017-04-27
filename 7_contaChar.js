function CountChars(string, char){
    var total=0;
    for(var i=0; i<string.length; i++) {
        if (string[i]==char) total++
    }
    return total;
}