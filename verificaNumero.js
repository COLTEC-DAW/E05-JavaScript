function impar (num) {
    return (num % 2) > 0;
}

function par (num) {
    return (num % 2) == 0;
}

function primo (num, i = 2) {
    if (num == 0 || num == 1) return false;

    if (i < num/2) {
        if (num % i == 0) return false;
        else return primo(num, i + 1);
    }
    else {
        return num % i != 0;
    }
}

let num = prompt("Digite o número: ");
let funcoes = [impar, par, primo];

for (let i=0; i < 3; i++) {
    console.log(funcoes[i].name + ": " + funcoes[i](num));
}