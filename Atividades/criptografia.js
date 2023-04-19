const criptografia = (string = 'abcdef', regra = (l) => String.fromCharCode(l.charCodeAt()+3)) => {
    return string.toUpperCase().split('').map(regra);
}