function piramide(number) {
  if(number <= 0) {
    return 0;
  }
  else {
    var str = "";
    for(i = 0; i < number; i++) {
      str += "#";
    }
    piramide(number-1);
    console.log(str);
  }
}

function tabuleiro(number) {
  var str = "# # # #";
  for(i = 0; i < number; i++) {
    if(i % 2 == 0) {
      console.log(" "+str);
    }
    else {
      console.log(str);
    }
  }
}

function palindromo(word) {
  word = word.toLowerCase();
  for(i = word.length-1; i >= 0; i--) {
    if(word[i] != word[word.length-1-i]){
      return console.log("NÃO");
    }
    if(i == 0){
      console.log("SIM");
    }
  }
}

function numeros1a100() {
  for(i = 0; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    }
    if(i % 3 == 0){
      console.log("Fizz");
    }
    if(i % 5 == 0) {
      console.log("Buzz");
    }
    else {
      console.log(i);
    }
  }
}

piramide(5);
tabuleiro(5);
palindromo("Ovo");
numeros1a100();
