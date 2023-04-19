const transformString = (string = 'teste', rule = (letter) => {
    if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o'|| letter == 'u'){
        return letter.toUpperCase();
    }
    return letter
}) => string.split('').map(rule) 