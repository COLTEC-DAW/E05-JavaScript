var linhas = Number.parseInt(prompt('Digite a quantidade de linhas: '))

for (let i = 0; i < linhas; i++) {
    
    var resultado = i % 2;

    if (resultado == 0) {
        console.log('# # # # ')
    } 
    else {
        console.log(' # # # #')
    }
    console.log('\n')
}
