let width = parseInt(prompt("Largura :"));
let height = parseInt(prompt("Altura :"));
for (let i = 0; i < height; i++) {
    let output = "";
    for (let j = 0; j < width; j++) {
        if (i % 2 == 0)
            output += " #";
        else
            output += "# ";
    }
    console.log(output);
}
//# sourceMappingURL=Chess.js.map