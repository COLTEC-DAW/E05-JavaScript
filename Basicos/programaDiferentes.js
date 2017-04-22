for(var i = 1; i < 101; i++) {
	if(i % 3 == 0) {
		if(i % 5 == 0) {
			console.log("FizzBuzz");			
		}
		else {
			console.log("Fizz");
		}
	}
	else {
		if(i % 5 == 0) {
			console.log("Buzz");			
		}
		else {
			console.log(i);
		}	
	}
}