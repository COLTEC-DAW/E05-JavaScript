function min (num1, num2) {
    if (num1 < num2) return num1;
    else if (num2 < num1) return num2;
    else return null;
}

// Pra fazer ser range inclusiva, faz i = 0 e troca o if por (i <= diferenca)
function range (num1, num2, array = [], i = 1) {
    let diferenca = Math.abs(num1 - num2);

    if (i < diferenca) {
        array.push(min(num1, num2) + i);
        return range (num1, num2, array, i + 1);
    }
    else return array;
}

function intAleatorio() {
    return Math.floor(Math.random() * 100);
}

let num1 = intAleatorio();
let num2 = intAleatorio();

console.log(`range(${num1}, ${num2}) = ${range(num1, num2)}`);