function changingStr(str, escolha1, escolha2) {
        var changedStr = "";
        for (let index = 0; index < str.length; index++) {
            if (escolha2(str[index])) {
                changedStr += escolha1(str[index]);
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
    
    var consoante = function(str) {
        return str != 'a' && str != 'e' && str != 'i' && str != 'o' && str != 'u'; 
    }
    
    var vogal = function(str) {
        return str == 'a' || str == 'e' || str == 'i' || str == 'o' || str == 'u'; 
    }
    
    console.log(changingStr("Teste", upper, vogal));