function transformString(string, Funcao) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
        transformedStr = '';
    for (i = 0; i < string.length; i++) {
        char = string.charAt(i);
      if (vowels.includes(char.toLowerCase())) {
        transformedStr += Funcao(char, true);
      } else {
        transformedStr += Funcao(char, false);
      }
    }
    return transformedStr;
  }
  
  function uppercaseVowelsOrConsonants(char, isVowel) {
    if (isVowel) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  }
  
  function lowercaseVowelsOrConsonants(char, isVowel) {
    if (isVowel) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  }
  
  var string = 'bom dia';
  console.log("String original: " + string);
  console.log("Caixa alta nas vogais: " + transformString(string, uppercaseVowelsOrConsonants));
  console.log("Caixa alta nas consoantes: " + transformString(string, (char, isVowel) => isVowel ? char.toLowerCase() : char.toUpperCase()));
  console.log("Caixa baixa nas vogais: " + transformString(string, lowercaseVowelsOrConsonants));
  console.log("Caixa baixa nas consoantes: " + transformString(string, (char, isVowel) => isVowel ? char.toUpperCase() : char.toLowerCase()));
  