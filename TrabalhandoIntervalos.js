var minimo = num(prompt('Número mínimo: '));
var maximo = num(prompt('Número máximo: '));
var intervalo = num(prompt('O intervalo: '));

function range(min, max, interval) {
  var num = [];

  for (let i = min + 1; i < max; i += interval) {
    num.push(i);
  }

  return num;
}

console.log(range(minimo, maximo, intervalo));
