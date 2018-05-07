var str = prompt("Digite sua string : ")


function reverseString(array) {
    var newString = "";
    for (var i = array.length - 1; i >= 0; i--) {
        newString += array[i];
    }
    return newString;
}
reverseString(str)