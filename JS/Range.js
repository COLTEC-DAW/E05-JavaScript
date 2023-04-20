function range(min, max) {
    let output;
    if (min <= max) {
        for (let i = min; i <= max; i++)
            output.push(i);
    }
    else {
        for (let i = min; i >= max; i--)
            output.push(i);
    }
    return output;
}
console.log(range(10, 24));
console.log(range(15, -5));
//# sourceMappingURL=Range.js.map