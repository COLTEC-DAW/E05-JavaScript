function countChar(sentence, value) {
    if (value.length != 1)
        return -1;
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i].toLowerCase() == value.toLowerCase())
            count++;
    }
    return count;
}
//# sourceMappingURL=CountChar.js.map