function intervalo(min, max) {
    let array = [];
    for (i = min; i <= max; i++) {
        array.push(i);
    }
    return array
}


console.log(intervalo(2, 12));