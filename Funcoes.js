// Função que retorna o menor de dois valores
function min(a, b) {
    return a < b ? a : b;
}

// Função que retorna o maior de dois valores
function max(a,b) {
    return a > b ? a : b;
}

// Calcula modulo: num % div
function mod(num, div) {
    // Se os números são iguais, é divisivel
    if(num === div) {
        return true;
    }
    // Se o número for menor que o divisor, não é divisivel
    else if(num < div) {
        return false;
    }
    // Se a resposta não foi encontrada chama mod novamente com num = num - div
    else {
        return mod(num - div, div);
    }
}

// Modulo de 2
function mod2(num) {
    return mod(num, 2);
}

// Função que recebe uma frase e um char e imprime quantas vezes o char aparece na frase
function countChar(frase, char) {
    let count = 0;

    for(pos in frase) {
        if(frase[pos] === char) {
            count++;
        }
    }

    console.log("O char '" + char + "' aparece " + count + " vezes na frase.")
}


/* ----- Testes ----- */
function execute() {
    do {
        var ex = parseInt(prompt("Escolha um exercicio: \n1.MinMax\n2.Modulo\n3.CountChar\n0.Finalizar"));

        switch(ex) {
            case 1:
                console.log("\n--- MinMax ---");
                let a = parseInt(prompt("Digite o primeiro número: "));
                let b = parseInt(prompt("Digite o segundo número: "));
                
                console.log("O menor é: " + min(a, b));
                console.log("O maior é: " + max(a, b));
                break;
            case 2:
                console.log("\n--- Modulo ---");
                let num = parseInt(prompt("Digite o número: "));
                let div = parseInt(prompt("Digite o divisor: "));

                console.log(mod(num, div) ? "É divisivel" : "Não é divisivel");
                break;
            case 3:
                console.log("\n--- CountChar ---");
                let frase = prompt("Digite a frase: ");
                let char = prompt("Digite o char a ser contado: ");
            
                countChar(frase, char);
                break;
            case 0:
                break;
            default:
                console.log("Valor invalido: " + ex);
        }
    } while(ex != 0);
}

execute();