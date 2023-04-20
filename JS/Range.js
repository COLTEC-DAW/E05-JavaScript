function range(min, max) {
    var output;
    if (min <= max) {
        for (var i = min; i <= max; i++)
            output.push(i);
    }
    else {
        for (var i = min; i >= max; i--)
            output.push(i);
    }
    return output;
}
console.log(range(10, 24));
console.log(range(15, -5));
//# sourceMappingURL=Range.js.map