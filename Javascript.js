function triangulo(quantidadeLinhas) {

    for (let i = 1; i <= quantidadeLinhas; i++) {

      console.log("#".repeat(i));

    }

}

function xadrez(quantidadeLinhas) {

    let linha = "";

    for (let i = 1; i <= quantidadeLinhas; i++) {

      for (let j = 1; j <= quantidadeLinhas; j++) {

        if ((i + j) % 2 === 0) {

          linha += " #";

        } else {

          linha += "# ";

        }

      }

      linha += "\n";

    }

    document.write("<pre>" + linha + "</pre>");

}

function verificarPalindromo(palavra) {

    const palavraInvertida = palavra.split("").reverse().join("");

    if (palavra === palavraInvertida) {

      return true;

    } else {

      return false;

    }

}

function fizzBuzz() {

    for (let i = 1; i <= 100; i++) {

      if (i % 3 === 0 && i % 5 === 0) {

        console.log("FizzBuzz");

      } else if (i % 3 === 0) {

        console.log("Fizz");

      } else if (i % 5 === 0) {

        console.log("Buzz");

      } else {

        console.log(i);

      }

    }

}

function min(a, b) {

    if (a < b) {

      return a;

    } else {

      return b;

    }

}

  

function max(a, b) {

    if (a > b) {

      return a;

    } else {

      return b;

    }

}

function mod2(number) {

    if (number === 0) {

      return true;

    } else if (number === 1) {

      return false;

    } else {

      return mod2(number - 2);

    }

  }

  

  function mod(num, mod) {

    if (num === 0) {

      return true;

    } else if (num < mod) {

      return false;

    } else {

      return mod(num - mod, mod);

    }

}

function contaCaracter(frase, c) {

    let count = 0;

    for (let i = 0; i < frase.length; i++) {

      if (frase.charAt(i) === c) {

        count++;

      }

    }

    return count;

}
