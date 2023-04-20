function transformString(str, transformFunc) {
    let transformedStr = '';
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      transformedStr += transformFunc(char);
    }
  
    return transformedStr;
}

function upperCaseVowels(char) {
    if (/[aeiou]/i.test(char)) {
      return char.toUpperCase();
    } else {
      return char;
    }
  }
  
  function upperCaseConsonants(char) {
    if (/[bcdfghjklmnpqrstvwxyz]/i.test(char)) {
      return char.toUpperCase();
    } else {
      return char;
    }
  }
  
  function lowerCaseVowels(char) {
    if (/[aeiou]/i.test(char)) {
      return char.toLowerCase();
    } else {
      return char;
    }
  }
  
  function lowerCaseConsonants(char) {
    if (/[bcdfghjklmnpqrstvwxyz]/i.test(char)) {
      return char.toLowerCase();
    } else {
      return char;
    }
  }

  const str = 'JavaScript is Awesome!';

console.log(transformString(str, upperCaseVowels)); 
console.log(transformString(str, upperCaseConsonants)); 
console.log(transformString(str, lowerCaseVowels)); 
console.log(transformString(str, lowerCaseConsonants)); 
