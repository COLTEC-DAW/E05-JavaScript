var objetoTeste = {
    idade: 11,
    nome: "Joao"
}
var objetoTeste2 = {
    idade: 20,
    nome: " Joao"
}

function deepEquals(objteste1, objteste2){
    
    var tmp = [];
    for (var prop in objteste1)
    {   tmp.push(prop);    }

    var tmp2 = [];
    for (var prop in objteste2)
    {   tmp2.push(prop);    }

    if(JSON.stringify(tmp) == JSON.stringify(tmp2))
    {   return true;    }
    else {   return false;   }
}
//resultado e chamada da funcao

if(deepEquals(objetoTeste, objetoTeste2) == false)
{   console.log("Os objetos nao sao iguais");  }

else if(deepEquals(objetoTeste, objetoTeste2) == true)
{   console.log("Os objetos sao iguais");  }