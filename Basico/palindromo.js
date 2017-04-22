    var str;

    console.log("Digite uma frase");
    process.stdin.setEncoding('utf8');
    process.stdin.on('readable', function() {
        str = process.stdin.read();
        if (str !== null) {
            process.stdout.write((str.split('').reverse().join('') == str) ? 'É Palindromo' : 'Não é Palindromo');
        process.exit();
        }
    });