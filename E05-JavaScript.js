function Desenha_triangulo() {
	var tri = document.getElementById('tri');

	for(var i =0;i<=tri.value;i++){  
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