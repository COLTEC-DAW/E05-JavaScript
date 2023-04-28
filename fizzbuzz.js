function checaFizz (num) {
    if (num % 3 == 0) return "Fizz";
    else return "";
}

function checaBuzz (num) {
    if (num % 5 == 0) return "Buzz";
    else return "";
}

function fizzBuzz (num) {
    let str = checaFizz(num);
    str += checaBuzz(num);
    if (str == "") str = num;

    console.log(str);
}

function programa (tamanho, i = 1) {
    if (i <= tamanho) {
        fizzBuzz(i);
        programa(tamanho, i + 1);
    }
}

let tamanho = prompt("Digite o tamanho: ");
programa(tamanho);