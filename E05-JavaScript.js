function Desenha_triangulo() {
	var trin = document.getElementById('tri');

	for(var i =0;i<=trin.value;i++){  
	    for(var x =0;x<i;x++){  
		  document.write("#");
			}  
			document.write("<br>");
	  }
}

function Tabuleiro_de_xadrez() {
	var xad = document.getElementById('xad');

	for(var x =0;x<xad.value;x++){
		for(var i =0;i<=4;i++){  
			if(x%2 == 0)
				document.write('&nbsp;'+"#")
			else
				document.write("#"+'&nbsp;')
		}
			document.write("<br>")
	}
}

function mostraPalindromo() {
	var str = document.getElementById('palindromo').value;

	var tamanho = str.length;
	str = str.toLowerCase();
	var x = 0;
  
	for (var i =0; i < tamanho; i++) {
	  if (str[i] !== str[tamanho - i-1])
	  x++;                  
		}

	  if(x == 0)
		document.write("É um palindromo");
	  else
		document.write("Não é um palindromo");
  }