function toList(array, len)
{
    var list = {
        value: 0,
        rest: null,
    };
    for (i=0;i<len;i++)
    {
        if(i == 0)
        {
            list.value = array[i];
            list.rest = null;
        }
        else
        {
            var aux = list;
            while(aux.rest != null)
            {
                aux = aux.rest;
            }
            var elem = {
                value: array[i],
                rest: null,
            };
            aux.rest = elem;
        }
    }
    return list;
}
const test = ["artur", "gonzaga", "da", "silva", "gomes"];
var aa = toList(test, test.length);
for(aux = aa; aux.rest != null; aux = aux.rest) console.log(aux);