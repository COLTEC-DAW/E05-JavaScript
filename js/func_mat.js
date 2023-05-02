function matriz(i, j, func_mat)
{
        let matriz      = []

        for (let x = 0; x < i; x++)
        {
                let linha       = []

                for (let y = 0; y < j; y++)
                        linha.push(func_mat(x, y))

                matriz.push(linha)
        }

        return matriz
}

function sum(a, b)
{
        return a + b
}

function mux(a, b)
{
        return a * b
}

function igual(a, b)
{
        return a == b ? 1 : 0
}

function random_expression(a, b)
{
        return Math.pow(a, 2) / (b + 1)
}

function another_rand(a, b)
{
        return a > b ? 1 : (a < b ? 5 : 0)
}


function func_mat()
{
        let ind_lin        = parseInt(prompt('Digite o indice das linhas:'))
        let ind_col        = parseInt(prompt('Digite o indice das colunas:'))

        console.log('Soma: ')
        print_matrix(matriz(ind_lin, ind_col, sum))
        console.log('Produto: ')
        print_matrix(matriz(ind_lin, ind_col, mux))
        console.log('Igualdade: ')
        print_matrix(matriz(ind_lin, ind_col, igual))
        console.log('Aleatorio1: ')
        print_matrix(matriz(ind_lin, ind_col, random_expression))
        console.log('Aleatorio2 ')
        print_matrix(matriz(ind_lin, ind_col, another_rand))
}

function print_matrix(matrix)
{
        matrix.forEach(array =>
        {
                console.log(array)
        });
}