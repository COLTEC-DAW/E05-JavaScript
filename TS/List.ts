class list
{
    value: number;
    next: list | null;

    constructor(data: number = 1234567890)
    {
        this.value = data;
        this.next = null;
    }
}

function toList(source: number[]): list
{
    let index: list = new list(source[0]);
    let base: list = index;
    for(let i = 1; i < source.length; i++)
    {
        let step: list = new list(source[i]);
        index.next = step;
        index = index.next;
    }
    return base;
}

function printList(input: list)
{
    for(let i: list | null = input; i != null; i = i.next)
        console.log(i.value);
}

let arr: number[] = [1, 2 , 3, -4, 0];
console.log(arr);
printList(toList(arr));
