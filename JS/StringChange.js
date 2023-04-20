function ChangeString(input, method) {
    let output = "";
    for (let i = 0; i < input.length; i++)
        output = output.concat(method(input[i]));
    return output;
}
let original = "Uma FRasE 100% OriGinAl";
console.log(original);
console.log(ChangeString(original, (char) => {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
        return char.toUpperCase();
    else
        return char;
}));
console.log(ChangeString(original, (char) => {
    if (char === "A" || char === "E" || char === "I" || char === "O" || char === "U")
        return char.toLowerCase();
    else
        return char;
}));
console.log(ChangeString(original, (char) => {
    if (char != "A" && char != "E" && char != "I" && char != "O" && char != "U")
        return char.toLowerCase();
    else
        return char;
}));
console.log(ChangeString(original, (char) => {
    if (char != "a" && char != "e" && char != "i" && char != "o" && char != "u")
        return char.toUpperCase();
    else
        return char;
}));
//# sourceMappingURL=StringChange.js.map