function checaPalindromo (str, i) {
    return str[i] == str[str.length - 1 - i];
}

function palindromo (str, i = 0) {
    if (checaPalindromo (str, i) == false) {
        return false;
    }
    else if (i < str.length) {
        return palindromo(str, i+1);
    }
    else {
        return true;
    }
}

let string = prompt("Digite a string: ");
console.log("Palindromo = " + palindromo(string));