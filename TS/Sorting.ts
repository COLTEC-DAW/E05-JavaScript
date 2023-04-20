enum SortTypes{
    Increasing,
    Decreasing,
    IncreasingOdd,
    DecreasingEven,
}

function SortArray(input: number[], order: SortTypes): number[]
{ 
    let swap = (j: number) => {
        buffer = input[j+1];
        input[j+1] = input[j];
        input[j] = buffer;
    }
    
    let buffer: number;
    for(let i = 0; i < input.length; i++)
    {
        for(let j = 0; j < input.length - 1; j++)
        {
            switch(order)
            {
                case SortTypes.Increasing:
                    if(input[j] > input[j+1])
                        swap(j)
                    break;
                case SortTypes.Decreasing:
                    if(input[j] < input[j+1])
                        swap(j)
                    break;
                case SortTypes.IncreasingOdd:
                    if(input[j] % 2 == 0 )
                        input.splice(j, 1);
                    else if(input[j] > input[j+1])
                        swap(j)
                    break;
                case SortTypes.DecreasingEven:
                    if(input[j] % 2 != 0 )
                        input.splice(j, 1);
                    else if(input[j] < input[j+1])
                        swap(j)
                    break;
            }
        }
    }
    
    return input;
}

let toSort: number[] = [3, 45, 2, -16, 14, 13, 2, 4, 7, 10, -22];
console.log(toSort);

console.log(SortArray(toSort, SortTypes.Increasing))
console.log(SortArray(toSort, SortTypes.IncreasingOdd))

toSort = [3, 45, 2, -16, 14, 13, 2, 4, 7, 10, -22];
console.log(SortArray(toSort, SortTypes.Decreasing))
console.log(SortArray(toSort, SortTypes.DecreasingEven))