function array_to_lst(array)
{
        let last
        let lst = {}
        let ptr = lst

        array.forEach((element, index) =>
        {
                ptr.value       = element
                ptr.rest        = {}
                last            = ptr
                ptr             = ptr.rest
        });

        last.rest       = null

        return lst
}

function lst()
{
        let array       = prompt('Digite um conjunto de valores separados por virgula:').split(',')

        console.log(array_to_lst(array))
}
