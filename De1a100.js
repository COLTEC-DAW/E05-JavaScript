var divisivel = "";

for (var i=1; i<=100; i++) {
    if (i % 3 == 0) {
        divisivel += "Fizz";
    } 
    if (i % 5 == 0) {
        divisivel += "Buzz";
    }
    if (divisivel === "") {
        console.log(i);
    } else {
        console.log(divisivel);
    }
    divisivel = "";
}