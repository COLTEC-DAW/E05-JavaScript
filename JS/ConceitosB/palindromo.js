function palindromo(){
    let palavra = prompt("Digite uma palavra para verificar se é palindromo: ");
    palavra = palavra.toLocaleLowerCase().replace(/\s/g, '');
    let arvalap = palavra.split('').reverse().join('');
    if(palavra === arvalap){
        console.log("A palavra " + palavra + " é um palíndromo!");
    } else{
        console.log("A palavra " + palavra + " não né um palíndromo pos ao contrário fica: " + arvalap);
    }
}
palindromo();