const linhas = parseInt(prompt('Quantidade de linhas: '));

for (let i = 0; i < linhas; i++) {
  let linhaAtual = '';
  for (let j = 0; j <= i; j++) {
    linhaAtual += '#';
  }
  console.log(linhaAtual);
}
