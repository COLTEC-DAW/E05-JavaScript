//para console

    var str;


        str = prompt("Digite uma frase");
        if (str !== null) {
            console.log((str.split('').reverse().join('') == str) ? 'É Palindromo' : 'Não é Palindromo');
        }
