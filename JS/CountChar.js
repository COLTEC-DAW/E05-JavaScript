function countChar(sentence, value) {
    if (value.length != 1)
        return -1;
    var count = 0;
    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i].toLowerCase() == value.toLowerCase())
            count++;
    }
    return count;
}
//# sourceMappingURL=CountChar.js.map