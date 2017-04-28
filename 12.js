    function bubbleSort(items, criterio) 
    {
        var length = items.length;
        for (var i = 0; i < length; i++) 
        { 
            for (var j = 0; j < (length - i - 1); j++)
            { 
                if (criterio(items[j], items[j+1]) == false) //SE FOR VERDADEIRO (OU SEJA, NÃO TEM QUE TROCAR)
                {
                    //Swap the numbers
                    var tmp = items[j];  //Temporary variable to hold the current number
                    items[j] = items[j+1]; //Replace current number with adjacent number
                    items[j+1] = tmp; //Replace adjacent number with current number
                }
            }        
        }

        return items;
    }

    function crescenteImpar (num1, num2)
    {
        if (num1 % 2 == 0 && num2 % 2 == 0 || num1 % 2 != 0 && num2 % 2 != 0) //se os dois são pares ou os dois ímpares
        { //retorna o menor entre eles
            if (num1 > num2)
                return  false;
            else
                return true;
        }

        else if (num1 % 2 == 0 && num2 % 2 != 0) //se o 1 é par e o 2 é ímpar
        {
            return false;
        }

        else if (num1 % 2 != 0 && num2 % 2 == 0) //se o 1 é ímpar e o 2 é par
        {
            return true;
        }
    }

    function decrescentePar (num1, num2)
    {
        if (num1 % 2 == 0 && num2 % 2 == 0 || num1 % 2 != 0 && num2 % 2 != 0) //se os dois são pares ou os dois ímpares
        { //retorna o maior entre eles
            if (num1 > num2)
                return  true;
            else
                return false;
        }

        else if (num1 % 2 == 0 && num2 % 2 != 0) //se o 1 é par e o 2 é ímpar
        {
            return true;
        }

        else if (num1 % 2 != 0 && num2 % 2 == 0) //se o 1 é ímpar e o 2 é par
        {
            return false;
        }
    }

    function crescente (num1, num2)
    {
        if (num1 > num2)
            return false;
        return true;
    }

    function decrescente (num1, num2)
    {
        if (num1 > num2)
            return true;
        return false;
    }

    var vetor = [2, 1, 4, 3, 6, 5, 7, 8, 9];
    console.log (bubbleSort(vetor, crescente));
    console.log (bubbleSort(vetor, decrescente));
    console.log (bubbleSort(vetor, crescenteImpar));
    console.log (bubbleSort(vetor, decrescentePar));