function ChangeString(input: string, method: Function): string
{
    let output: string = "";
    for(let i = 0; i < input.length; i++)
        output = output.concat(method(input[i]));

    return output;
}

let original = "Uma FRasE 100% OriGinAl";
console.log(original);
console.log(ChangeString(original, (char: string) => {
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
        return char.toUpperCase();
    else return char;
}));
console.log(ChangeString(original, (char: string) => {
    if(char === "A" || char === "E" || char === "I" || char === "O" || char === "U")
        return char.toLowerCase();
    else return char;
}));
console.log(ChangeString(original, (char: string) => {
    if(char != "A" && char != "E" && char != "I" && char != "O" && char != "U")
        return char.toLowerCase();
    else return char;
}));
console.log(ChangeString(original, (char: string) => {
    if(char != "a" && char != "e" && char != "i" && char != "o" && char != "u")
        return char.toUpperCase();
    else return char;
}));


