function range(min, max) {
    if (min > max) {
        console.log("Erro: 'min' não pode ser maior que 'max'");
        return null;
    }
    var vetor = [];
    for (var i = min + 1; i < max; i++) {
        vetor.push(i);
    }
    return vetor;
}

function range(min, max, i) {
    if (min > max) {
        console.log("Erro: 'min' não pode ser maior que 'max'");
        return null;
    }
    var vetor = [];
    for (var j = min + i; j < max; j += i) {
        vetor.push(j);
    }

    return vetor;
}

console.log(range(5, 20, 2));