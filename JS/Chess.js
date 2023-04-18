var width = parseInt(prompt("Largura :"));
var height = parseInt(prompt("Altura :"));
for (var i = 0; i < height; i++) {
    var output_1 = "";
    for (var j = 0; j < width; j++) {
        if (i % 2 == 0)
            output_1 += " #";
        else
            output_1 += "# ";
    }
    console.log(output_1);
}
//# sourceMappingURL=Chess.js.map