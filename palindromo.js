function ePalindromo() {
    let palavra = document.getElementById("input_palavra").value;
    palavra = palavra.split(" ").join("");
    let containerPalindromo = document.getElementById("e_palindromo");
    if ((ePalindromoRecursivo(palavra, 0, palavra.length - 1))) {
        containerPalindromo.innerHTML = "<p>È palíndromo</p>"
    }
    else {
        containerPalindromo.innerHTML = "<p>Não é palíndromo</p>"
    }
}
function ePalindromoRecursivo(palavra, inicio, fim) {
    inicio = parseInt(inicio);
    fim = parseInt(fim);
    if ((inicio == fim) || ((inicio == fim - 1) && (palavra.charAt(inicio) == palavra.charAt(fim)))) {
        return true;
    }
    else if (palavra.charAt(inicio).toLowerCase() == palavra.charAt(fim).toLowerCase()) {
        return ePalindromoRecursivo(palavra, inicio + 1, fim - 1);
    }
    return false;
}