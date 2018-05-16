	for(var i=0;i < 100;i++){
		if (i%3 == 0) document.write('Fizz') //Divisivel por 3 
        	if (i%5 == 0) document.write('Buzz') //Divisivel por 5 
				if (i%3 != 0 && i%5 != 0) document.write(i) // Os números normais não divisiveis por 3 e 5
					document.write("<br>")  
}
