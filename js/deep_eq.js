function deepEquals(obj1, obj2)
{
        let eq  = true

        for (const propriedade in obj1)
                eq      = eq && obj1[propriedade] === obj2[propriedade]

        if(eq)
        {
                for (const propriedade in obj2)
                        eq      = eq && obj1[propriedade] === obj2[propriedade]
        }
        
        return eq
}

function deep_eq()
{
        let o1  = { a: 1, b: 2}
        let o2  = { c: 1, d: 2}
        let o3  = { e: 3, f: 'f'}
        let o4  = { e: 3, f: 'f'}

        if(deepEquals(o1, o2))
                console.log('O1 e O2 possuem mesmas propriedades')
        else
                console.log('O1 e O2 nao possuem mesmas propriedades')

        if(deepEquals(o3, o4))
                console.log('O3 e O4 possuem mesmas propriedades')
        else
                console.log('O3 e O4 nao possuem mesmas propriedades')
}