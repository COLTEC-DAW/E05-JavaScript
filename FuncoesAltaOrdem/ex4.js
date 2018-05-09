function changingStr(str, upperOrLowerCriteria, vowelOrConsonantCriteria) {
    var changedStr = "";
    for (let index = 0; index < str.length; index++) {
        if (vowelOrConsonantCriteria(str[index])) {
            changedStr += upperOrLowerCriteria(str[index]);
        } else {
            changedStr += str[index];
        }
    }
    return changedStr;
}

var lower = function (str) {
    return str.toLowerCase();
}

var upper = function (str) {
    return str.toUpperCase();
}

var consonant = function(str) {
    return str != 'a' && str != 'e' && str != 'i' && str != 'o' && str != 'u'; 
}

var vowel = function(str) {
    return str == 'a' || str == 'e' || str == 'i' || str == 'o' || str == 'u'; 
}

console.log(changingStr("Germano", upper, vowel));
    