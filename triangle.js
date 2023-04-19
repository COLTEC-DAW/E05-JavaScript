var length = prompt("Tamanho do triângulo: ");
var triangle = "";

for (var index = 0; index < length; index++) {
    for (let j = 0; j <= index; j++) {
        triangle += "#";
    }
    triangle += "\n";
}

console.log(triangle);