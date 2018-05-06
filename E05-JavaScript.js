function Desenha_triangulo() {
	var tri = document.getElementById('tri');

	for(var i =0;i<=tri.value;i++){  
	    for(var x =0;x<i;x++){  
		  document.write("#");
			}  
			document.write("<br>");
	  }
}

