const countChars = (frase,c) => {
    let count = frase.split('').filter(l => l === c).length
    console.log(count)
}