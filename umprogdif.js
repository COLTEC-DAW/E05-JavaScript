var document = Document;
function umprogdif(){

    let containerUmprogdif = document.getElementById("umprogdif");

    let divisivel = '';
    for(let i = 1; i<=100; i++)
    {
        divisivel += "<p>";
        if(i%3 == 0 && i%5 == 0) divisivel += i + " FizzBuzz";
        else if(i%5 == 0) divisivel += i + " Buzz";
        else if(i%3 == 0) divisivel +=  i + " Fizz";
        else divisivel += i;
        divisivel += "<\p>";
    }

    containerUmprogdif.innerHTML += divisivel;
}