function deepEquals(obj1, obj2){
    let properties = Object.keys(obj1);
    let isEqual = true;
    properties.forEach((prop) => {
        if (obj1[prop] != obj2[prop]){
            isEqual = false;
        }
    })
    return isEqual;
}

function mainDeepEquals()
{
    var obj1 = {
        a: 1,
        b: 2,
        c: 3
    };

    var obj2 = {
        a: 1,
        b: 2,
        c: 3
    };

    console.log(deepEquals(obj1, obj2));
}