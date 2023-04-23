const linhas = parseInt(prompt('Quantidade de linhas: '));

for (let i = 0; i < linhas; i++) {
  let linhaAtual = '';

  if (i % 2 === 0) {
    linhaAtual = '# # # # ';
  } else {
    linhaAtual = ' # # # #';
  }

  console.log(linhaAtual);
}
