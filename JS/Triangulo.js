var linhas = Number.parseInt(prompt('Digite a quantidade de linhas: '))

for (let i = 0; i < linhas; i++) {
    for (var j = 0; j <= (i + 1); j++) {
        document.write('#') // n sei pq mas n consegui fazer esse ex usando console.log
    }
    document.write('<br>')
}
