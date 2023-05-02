function cryptography(msg, cipher, key)
{
        let msgResult   = []

        for (let c = 0; c < msg.length; c++)
                msgResult.push(String.fromCharCode(cipher(msg.charAt(c), key)))

        return msgResult.toString().replaceAll(',', '')
}

function caeser_cipher(chr, key)
{
        let aAscii      = 'A'.charCodeAt(0)

        return (chr.toUpperCase().charCodeAt(0) - aAscii + key) % 26 + aAscii
}

function cripto()
{
        let msg = prompt('Digite uma mensagem (somente letras):')
        let key = parseInt(prompt('Digite uma chave de 0 a 26:'))
        let cry = cryptography(msg, caeser_cipher, key)

        console.log('Mensagem resultante: ' + cry)
        console.log('Para reverter o efeito da chave ' + key + ', utilize a chave ' + (26 - key))
}