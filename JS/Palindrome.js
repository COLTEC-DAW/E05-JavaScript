var input = prompt("Digite a palavra: ");
function verify() {
    input = input.toLocaleLowerCase();
    for (var i = 0; i < Math.floor(input.length / 2); i++) {
        if (input[i] != input[input.length - 1 - i]) {
            console.log("Palavra comum");
            return;
        }
    }
    console.log("Palíndromo encontrado!");
}
verify();
//# sourceMappingURL=Palindrome.js.map