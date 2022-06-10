var divisible = "";

for (var i=1; i<=100; i++) 
{
    if (i % 3 == 0) 
    {
        divisible += "Fizz";
    } 
    
    if (i % 5 == 0) 
    {
        divisible += "Buzz";
    }
    
    if (divisible === "") 
    {
        console.log(i);
    } 
    
    else 
    {
        console.log(divisible);
    }
    
    divisible = "";
}