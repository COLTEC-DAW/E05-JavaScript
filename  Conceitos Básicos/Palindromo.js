var palavra = prompt("Digite sua palavra : ")

    if((palavra.split('').reverse().join('') == palavra)){
    document.write( 'É Palindromo')

}
    else{
    document.write( 'Não é Palindromo')
    
}